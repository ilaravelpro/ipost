import StoreDataSingle from "ivue3/js/handel/functions/store/data/single.func.js";

const CommentsSingle = Object.assign({}, StoreDataSingle);
let baseState = CommentsSingle.store.state();

CommentsSingle.init({
    id: 'CommentsSingle',
    state: () => {
        baseState.options.typeForm = 'formData';
        return {
            ...baseState,
            resource: 'comments',
            html: {
                classes: {
                    fields: {
                        global: {
                            section: 'w-full md:w-1/2 lg:w-1/4'
                        }
                    }
                },
            },
            fields: [
                {
                    component: 'i-form-fields',
                    attrs: {
                        class: 'flex flex-wrap w-full',
                        items: function ($context) {
                            return [
                                {
                                    component: 'i-select-pro',
                                    attrs: {
                                        label: 'کاربر',
                                        'field-index': 'creator_id',
                                        url: 'users/data',
                                        type: 'array',
                                        search: true,
                                    }
                                },
                                {
                                    component: 'i-input',
                                    attrs: {
                                        label: 'عنوان',
                                        'field-index': 'name',
                                    }
                                },
                                {
                                    component: 'i-input',
                                    attrs: {
                                        label: 'امتیاز کلی',
                                        'field-index': 'star',
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
                                                    type: 'parent',
                                                    value: 'post'
                                                }
                                            }
                                        },
                                    }
                                },
                                {
                                    component: 'i-select-pro',
                                    if: function($context) {
                                        return $context.getValue('type.value', false);
                                    },
                                    attrs: {
                                        label: 'Item',
                                        'field-index': `item`,
                                        url: $context.getValue('type.value', false) === 'article' ? 'articles/data': 'books/data',
                                        type: 'array',
                                        search: true,
                                    }
                                },
                                {
                                    component: 'i-input',
                                    attrs: {
                                        label: 'تاریخ تایید',
                                        'field-index': `approved_at`,
                                        type: "datetime",
                                    }
                                },
                                {
                                    component: 'i-select-pro',
                                    attrs: {
                                        label: 'وضعیت',
                                        'field-index': 'status',
                                        url: 'data/statuses/comments',
                                    }
                                },
                                {
                                    component: 'i-text-area',
                                    attrs: {
                                        label: 'متن',
                                        'field-index': 'text',
                                        css: {
                                            section: 'w-full'
                                        }
                                    }
                                },
                                {
                                    component: 'i-repeater-accordion',
                                    attrs: {
                                        id: 'replays_repeater_accordion',
                                        class: 'w-full p-2',
                                        title: 'پاسخ ها',
                                        'field-index': 'replays',
                                        prefixTitle: 'پاسخ',
                                        addTitle: 'افزودن پاسخ',
                                        itemName: 'name',
                                        body(row, index, context) {
                                            let $base = `${context.getIndex('store')}.${index}`;
                                            return [
                                                {
                                                    component: 'i-form-fields',
                                                    attrs: {
                                                        class: 'd-flex flex-wrap',
                                                        items: [
                                                            {
                                                                component: 'i-select-pro',
                                                                attrs: {
                                                                    label: 'کاربر',
                                                                    'field-index': `${$base}.creator_id`,
                                                                    url: 'users/data',
                                                                    type: 'array',
                                                                    search: true,
                                                                }
                                                            },
                                                            {
                                                                component: 'i-input',
                                                                attrs: {
                                                                    label: 'عنوان',
                                                                    'field-index': `${$base}.name`,
                                                                }
                                                            },
                                                            {
                                                                component: 'i-input',
                                                                attrs: {
                                                                    label: 'تاریخ تایید',
                                                                    'field-index': `${$base}.approved_at`,
                                                                    type: "datetime",
                                                                }
                                                            },
                                                            {
                                                                component: 'i-select-pro',
                                                                attrs: {
                                                                    label: 'وضعیت',
                                                                    'field-index': `${$base}.status`,
                                                                    url: 'data/statuses/comments',
                                                                }
                                                            },
                                                            {
                                                                component: 'i-text-area',
                                                                attrs: {
                                                                    label: 'متن',
                                                                    'field-index': `${$base}.text`,
                                                                    css: {
                                                                        section: 'w-full'
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
                        }
                    }
                }

            ]
        }
    },
})

export default CommentsSingle;
