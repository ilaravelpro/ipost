import StoreDataSingle from "ivue3/js/handel/functions/store/data/single.func.js";
const PagesSingle =  Object.assign({}, StoreDataSingle);
let baseState = PagesSingle.store.state();

PagesSingle.init({
    id: 'PagesSingle',
    state: () => {
        baseState.options.typeForm = 'formData';
        return {
            ...baseState,
            resource: 'pages',
            html: {
                classes: {
                    fields: {
                        global: {
                            section: 'w-full md:w-1/2 lg:w-1/4'
                        }
                    }
                },
            },
            fields: function ($context) {
                const local = 'fa';
                let $parentIndex = local === "fa" ? '' : `locals.${local}.`;
                let css = {
                    section: 'w-full md:w-1/2 lg:w-1/4'
                };
                let cssFull = {
                    section: 'w-full'
                };
                if (local === "en") {
                    css.field = 'ltr';
                    cssFull.field = 'ltr';
                }
                let $items = [
                    {
                        component: 'i-input',
                        attrs: {
                            label: 'عنوان',
                            'field-index': `${$parentIndex}title`,
                            css: css
                        }
                    },
                    {
                        component: 'i-input',
                        attrs: {
                            label: 'آدرس یکتا',
                            'field-index': `${$parentIndex}slug`,
                            css: {
                                field: 'ltr'
                            }
                        }
                    },
                ]
                if (local === "fa") {
                    $items.push(...[
                        {
                            component: 'i-select-pro',
                            /*if($context) {
                                return $context.getValue('template') !== 'home'
                            },*/
                            attrs: {
                                label: 'وضعیت',
                                'field-index': `${$parentIndex}status`,
                                url: 'data/statuses/pages',
                            }
                        },
                        {
                            component: 'i-select-pro',
                            attrs: {
                                label: 'قالب',
                                'field-index': `${$parentIndex}template`,
                                type: 'single',
                                items: [
                                    {
                                        text: 'کلاسیک',
                                        value: 'classic',
                                    },
                                    {
                                        text: 'سفارشی',
                                        value: 'custom',
                                    }
                                ]
                            }
                        },
                    ])
                }
                $items.push(...[
                    {
                        component: 'i-input',
                        attrs: {
                            label: 'توضیحات خلاصه',
                            'field-index': `${$parentIndex}summary`,
                            type: 'textarea',
                            css: cssFull
                        }
                    }, {
                        component: 'i-tag',
                        attrs: {
                            label: 'کلمات کلیدی',
                            'field-index': `${$parentIndex}tags`,
                            css: cssFull
                        }
                    },
                    {
                        component: 'i-ckeditor',
                        if($context) {
                            return ['custom'].indexOf($context.getValue('template')) === -1
                        },
                        attrs: {
                            label: 'توضیحات',
                            'field-index': `${$parentIndex}content`,
                            css: cssFull,
                            editorConfig: {
                                language: local
                            }
                        }
                    }
                ]);
                return [{
                    component: 'i-form-fields',
                    attrs: {
                        css: {
                            section: (local === 'fa' && ['custom'].indexOf($context.getValue('template')) === -1 ? 'md:w-5/6 ' : '') + 'w-full p-0 flex flex-wrap',
                        },
                        items: $items
                    }
                }, ...(local === 'fa' && ['custom'].indexOf($context.getValue('template')) === -1 ? [{
                    component: 'i-form-fields',
                    attrs: {
                        css: {
                            'section': 'w-full md:w-1/6 flex justify-center items-center relative',
                            'group-fields': 'w-full flex flex-wrap justify-center',
                        },
                        items: [
                            {
                                component: 'i-file',
                                attrs: {
                                    css: {
                                        section: 'w-initial lg:absolute top-0'
                                    },
                                    btnTitle: 'تصویر یکتا',
                                    'field-index': {
                                        store: `${$parentIndex}image_file`,
                                        get: `${$parentIndex}image`
                                    }
                                }
                            },
                        ]
                    }
                },] : [])
                ];
            }
        }
    },
})

export default PagesSingle;
