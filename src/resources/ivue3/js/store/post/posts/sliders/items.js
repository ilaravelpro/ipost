let SliderSingleItems = {
    fields: function (local, $context) {
        let css = {
            section: 'w-full',
        };
        if (local === "en") css.field = 'ltr';
        let $items = [
            {
                component: 'i-repeater-accordion',
                attrs: {
                    id: 'slider_items_repeater_accordion',
                    title: 'بخش ها',
                    class: 'w-full p-2 my-2',
                    'field-index': local === "fa" ? 'content' : `locals.${local}.content`,
                    prefixTitle: 'اسلاید',
                    addTitle: 'اضافه کردن اسلاید',
                    body(row, index, $context) {
                        let $parentIndex = $context.getIndex('store') + `.${index}.`;
                        return [
                            {
                                component: 'i-form-fields',
                                attrs: {
                                    class: 'flex flex-wrap',
                                    items: [
                                        {
                                            component: 'i-input',
                                            attrs: {
                                                label: 'عنوان',
                                                'field-index': `${$parentIndex}title`,
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-select-pro',
                                            attrs: {
                                                label: 'قالب',
                                                'field-index': `${$parentIndex}template`,
                                                type: 'single',
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                                items: [
                                                    {
                                                        text: 'لینک',
                                                        value: 'link',
                                                    },
                                                    {
                                                        text: 'دسته بندی',
                                                        value: 'term',
                                                    },
                                                    {
                                                        text: 'کتاب',
                                                        value: 'book',
                                                    },
                                                    {
                                                        text: 'مقاله',
                                                        value: 'article',
                                                    },

                                                ]
                                            }
                                        },
                                        {
                                            component: 'i-file',
                                            attrs: {
                                                css: {
                                                    section: 'w-full md:w-1/3 xl:w-1/4 items-end',
                                                },
                                                btnTitle: 'تصویر',
                                                'field-index': {
                                                    store: `${$parentIndex}image_file`,
                                                    get: `${$parentIndex}image`
                                                }
                                            }
                                        },
                                        {
                                            component: 'i-input',
                                            if($context) {
                                              return $context.getValue(`${$parentIndex}template`) === 'link';
                                            },
                                            attrs: {
                                                label: 'لینک',
                                                'field-index': `${$parentIndex}link`,
                                                type: 'url',
                                                css: {
                                                    field: 'ltr',
                                                    section: 'w-full p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-select-pro',
                                            if($context) {
                                              return $context.getValue(`${$parentIndex}template`) === 'term';
                                            },
                                            attrs: {
                                                label: 'دسته بندی',
                                                'field-index': `${$parentIndex}term_id`,
                                                type: 'array',
                                                url: 'terms/data',
                                                css: {
                                                    ...css,
                                                    section: 'w-full p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-select-pro',
                                            if($context) {
                                              return $context.getValue(`${$parentIndex}template`) === 'term' && $context.getValue(`${$parentIndex}term_id.kids`, []).length;
                                            },
                                            attrs: {
                                                label: 'زیر دسته بندی',
                                                'field-index': `${$parentIndex}term_kid_id`,
                                                items: $context.getValue(`${$parentIndex}term_id.kids`, []),
                                                css: {
                                                    ...css,
                                                    section: 'w-full p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-select-pro',
                                            if($context) {
                                              return $context.getValue(`${$parentIndex}template`) === 'book';
                                            },
                                            attrs: {
                                                label: 'کتاب',
                                                'field-index': `${$parentIndex}book_id`,
                                                type: 'array',
                                                url: 'books/data',
                                                css: {
                                                    ...css,
                                                    section: 'w-full p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-select-pro',
                                            if($context) {
                                              return $context.getValue(`${$parentIndex}template`) === 'article';
                                            },
                                            attrs: {
                                                label: 'مقاله',
                                                'field-index': `${$parentIndex}article_id`,
                                                url: 'articles/data',
                                                css: {
                                                    ...css,
                                                    section: 'w-full p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-repeater-accordion',
                                            attrs: {
                                                id: `slider_items_actions_${index}_repeater_accordion`,
                                                class: 'w-full p-2 my-2',
                                                'field-index': `${$parentIndex}actions`,
                                                prefixTitle: 'دکمه',
                                                addTitle: 'اضافه کردن دکمه',
                                                body(action_row, action_index, action_context) {
                                                    let $actionIndex = action_context.getIndex('store') + `.${action_index}.`;
                                                    return [
                                                        {
                                                            component: 'i-form-fields',
                                                            attrs: {
                                                                class: 'flex flex-wrap',
                                                                items: [
                                                                    {
                                                                        component: 'i-input',
                                                                        attrs: {
                                                                            label: 'عنوان',
                                                                            'field-index': `${$actionIndex}title`,
                                                                            css: {
                                                                                ...css,
                                                                                section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                                            },
                                                                        }
                                                                    },
                                                                    {
                                                                        component: 'i-select-pro',
                                                                        attrs: {
                                                                            label: 'قالب',
                                                                            'field-index': `${$actionIndex}template`,
                                                                            type: 'single',
                                                                            css: {
                                                                                ...css,
                                                                                section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                                            },
                                                                            items: [
                                                                                {
                                                                                    text: 'لینک',
                                                                                    value: 'link',
                                                                                },
                                                                                {
                                                                                    text: 'زیر دسته بندی ها',
                                                                                    value: 'term_kids',
                                                                                },
                                                                                {
                                                                                    text: 'دسته بندی',
                                                                                    value: 'term',
                                                                                },
                                                                                {
                                                                                    text: 'کتاب',
                                                                                    value: 'book',
                                                                                },
                                                                                {
                                                                                    text: 'مقاله',
                                                                                    value: 'article',
                                                                                },

                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        component: 'i-input',
                                                                        if($context) {
                                                                            return $context.getValue(`${$actionIndex}template`) === 'link';
                                                                        },
                                                                        attrs: {
                                                                            label: 'لینک',
                                                                            'field-index': `${$actionIndex}link`,
                                                                            type: 'url',
                                                                            css: {
                                                                                field: 'ltr',
                                                                                section: 'w-full p-2',
                                                                            },
                                                                        }
                                                                    },
                                                                    {
                                                                        component: 'i-select-pro',
                                                                        if($context) {
                                                                            return $context.getValue(`${$actionIndex}template`) === 'term';
                                                                        },
                                                                        attrs: {
                                                                            label: 'دسته بندی',
                                                                            'field-index': `${$actionIndex}term_id`,
                                                                            type: 'array',
                                                                            url: 'terms/data',
                                                                            css: {
                                                                                ...css,
                                                                                section: 'w-full p-2',
                                                                            },
                                                                        }
                                                                    },
                                                                    {
                                                                        component: 'i-select-pro',
                                                                        if($context) {
                                                                            return $context.getValue(`${$actionIndex}template`) === 'term' && $context.getValue(`${$actionIndex}term_id.kids`, []).length;
                                                                        },
                                                                        attrs: {
                                                                            label: 'زیر دسته بندی',
                                                                            'field-index': `${$actionIndex}term_kid_id`,
                                                                            items: $context.getValue(`${$actionIndex}term_id.kids`, []),
                                                                            css: {
                                                                                ...css,
                                                                                section: 'w-full p-2',
                                                                            },
                                                                        }
                                                                    },
                                                                    {
                                                                        component: 'i-select-pro',
                                                                        if($context) {
                                                                            return $context.getValue(`${$actionIndex}template`) === 'book';
                                                                        },
                                                                        attrs: {
                                                                            label: 'کتاب',
                                                                            'field-index': `${$actionIndex}book_id`,
                                                                            url: 'books/data',
                                                                            css: {
                                                                                ...css,
                                                                                section: 'w-full p-2',
                                                                            },
                                                                        }
                                                                    },
                                                                    {
                                                                        component: 'i-select-pro',
                                                                        if($context) {
                                                                            return $context.getValue(`${$actionIndex}template`) === 'article';
                                                                        },
                                                                        attrs: {
                                                                            label: 'مقاله',
                                                                            'field-index': `${$actionIndex}article_id`,
                                                                            url: 'articles/data',
                                                                            css: {
                                                                                ...css,
                                                                                section: 'w-full p-2',
                                                                            },
                                                                        }
                                                                    },
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                    ]
                                }
                            }
                        ]
                    }
                }
            },
        ]
        return $items;
    }
};
export default SliderSingleItems
