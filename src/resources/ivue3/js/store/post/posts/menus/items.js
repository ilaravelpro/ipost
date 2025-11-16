let MenuSingleItems = {
    fields: function (local, $context, $name = null, is_child = false) {
        let css = {
            section: 'w-full',
        };
        if (local === "en") css.field = 'ltr';
        let $items = [
            {
                component: 'i-repeater-accordion',
                attrs: {
                    id: 'menu_items_repeater_accordion' + ($name??''),
                    title: 'بخش ها',
                    class: 'w-full p-2 my-2',
                    'field-index': $name ?? (local === "fa" ? 'content' : `locals.${local}.content`),
                    prefixTitle: 'مورد',
                    addTitle: 'اضافه کردن مورد',
                    body(row, index, context) {
                        let $parentIndex = context.getIndex('store') + `.${index}.`;
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
                                                    section: 'w-full md:w-1/2 p-2',
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
                                                    section: 'w-full md:w-1/2 p-2',
                                                },
                                                items: [
                                                    {
                                                        text: 'لینک',
                                                        value: 'link',
                                                    },
                                                    {
                                                        text: 'صفحه',
                                                        value: 'page',
                                                    },
                                                    /*{
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
                                                    {
                                                        text: 'مجموعه',
                                                        value: 'parent',
                                                    },
                                                    ...(is_child?[{
                                                        text: 'مجموعه ویژه',
                                                        value: 'parent_vip',
                                                    },] : [])*/

                                                ]
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
                                                return $context.getValue(`${$parentIndex}template`) === 'page';
                                            },
                                            attrs: {
                                                label: 'صفحه',
                                                'field-index': `${$parentIndex}page_id`,
                                                url: 'pages/data',
                                                type: 'array',
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
                                        ...(['parent', 'parent_vip'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1 ? MenuSingleItems.fields(local, $context, `${$parentIndex}items`, true) : [])
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
export default MenuSingleItems
