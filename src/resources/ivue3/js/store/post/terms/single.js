import StoreDataSingle from "ivue3/js/handel/functions/store/data/single.func.js";

const TermsSingle = Object.assign({}, StoreDataSingle);
let baseState = TermsSingle.store.state();
TermsSingle.init({
    id: 'TermsSingle',
    state: () => {
        baseState.options.typeForm = 'formData';
        return {
            ...baseState,
            resource: 'terms',
            html: {
                classes: {
                    fields: {
                        global: {
                            section: 'w-full md:w-1/2 lg:w-1/4'
                        }
                    }
                },
            },
            fields: {
                general: function ($context) {
                    let $items = [
                        {
                            component: 'i-input',
                            attrs: {
                                label: 'عنوان',
                                'field-index': `title`,
                            }
                        },
                    ]
                    $items.push(...[
                        {
                            component: 'i-select-pro',
                            attrs: {
                                label: 'سر دسته',
                                'field-index': {
                                    'store': `parents`,
                                    'diff': `id`
                                },
                                url: 'terms/data',
                                type: 'array',
                                search: true,
                                multiple: true,
                                query(context) {
                                    return {
                                        'parent': 0
                                    }
                                },
                            }
                        },
                        {
                            component: 'i-select-pro',
                            attrs: {
                                label: 'نوع',
                                'field-index': 'type',
                                url: 'types/data',
                                type: 'array',
                                search: true,
                                query(context) {
                                    return {
                                        filter: {
                                            type: 'parent_id',
                                            value: 'term'
                                        }
                                    }
                                },
                            }
                        },
                        {
                            component: 'i-select-pro',
                            attrs: {
                                label: 'وضعیت',
                                'field-index': `status`,
                                url: 'data/statuses/terms',
                            }
                        },
                    ])
                    $items.push({
                            component: 'i-input',
                            attrs: {
                                label: 'خلاصه',
                                'field-index': `description`,
                                type: 'textarea',
                                css: {
                                    section: 'w-full'
                                }
                            }
                        },

                        {
                            component: 'i-ckeditor',
                            if($context) {
                                return ['custom'].indexOf($context.getValue('template')) === -1
                            },
                            attrs: {
                                label: 'توضیحات',
                                'field-index': `content`,
                                css: {
                                    section: 'w-full'
                                },
                                editorConfig: {
                                    language: 'fa'
                                }
                            }
                        });


                    return [
                        {
                            component: 'i-form-fields',
                            attrs: {
                                css: {
                                    section: 'md:w-5/6 w-full p-0 flex flex-wrap',
                                },
                                items: $items
                            }
                        },
                        {
                            component: 'i-form-fields',
                            attrs: {
                                css: {
                                    section: 'w-full md:w-1/6 flex justify-center',
                                    'group-fields': 'w-full md:block md:sticky md:top-0 flex-flex-wrap'
                                },
                                items: [
                                    {
                                        component: 'i-file',
                                        attrs: {
                                            css: {
                                                section: 'w-full min-h-[10rem]',
                                                'input-group': 'h-full'
                                            },
                                            btnTitle: 'تصویر یکتا',
                                            'field-index': {
                                                store: `image_file`,
                                                get: `image`
                                            }
                                        }
                                    },
                                ]
                            }
                        }
                    ];
                }
            }
        }
    },
})

export default TermsSingle;
