let CustomPage = {
    fields: function (local, $context) {
        let css = {
            section: 'w-full',
        };
        if (local === "en") css.field = 'ltr';
        let $items = [
            {
                component: 'i-repeater-accordion',
                attrs: {
                    id: 'custom_repeater_accordion',
                    title: 'بخش ها',
                    class: 'w-full p-2 my-2',
                    'field-index': local === "fa" ? 'content' : `locals.${local}.content`,
                    prefixTitle: 'بخش',
                    itemName: 'title',
                    addTitle: 'اضافه کردن بخش',
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
                                                items: [
                                                    {
                                                        text: 'خانه - شروع',
                                                        value: 'home-start',
                                                    },
                                                    {
                                                        text: 'خانه - درباره ما',
                                                        value: 'home-about',
                                                    },
                                                    {
                                                        text: 'خانه - مقالات',
                                                        value: 'home-articles',
                                                    },
                                                    {
                                                        text: 'خانه - محصولات',
                                                        value: 'home-products',
                                                    },
                                                    {
                                                        text: 'خانه - محصولات با تب بندی',
                                                        value: 'home-products-tabs',
                                                    },
                                                    {
                                                        text: 'خانه - دسته‌بندی‌ها',
                                                        value: 'home-terms',
                                                    },
                                                    {
                                                        text: 'کلاسیک',
                                                        value: 'classic',
                                                    },
                                                    {
                                                        text: 'بنر',
                                                        value: 'banner',
                                                    },
                                                    {
                                                        text: 'متن',
                                                        value: 'text',
                                                    },
                                                    {
                                                        text: 'رسانه',
                                                        value: 'media',
                                                    },
                                                    {
                                                        text: 'متن و رسانه',
                                                        value: 'text-media',
                                                    },
                                                    {
                                                        text: 'کتاب ها',
                                                        value: 'products',
                                                    },
                                                    {
                                                        text: 'پدیدآورندگان',
                                                        value: 'creators',
                                                    },
                                                    {
                                                        text: 'پدیدآورنده',
                                                        value: 'creator',
                                                    },
                                                    {
                                                        text: 'اخبار',
                                                        value: 'articles',
                                                    },
                                                    {
                                                        text: 'شروع کتاب',
                                                        value: 'product-header',
                                                    },
                                                    {
                                                        text: 'درباره کتاب',
                                                        value: 'product-about',
                                                    },
                                                    {
                                                        text: 'نظرات کتاب',
                                                        value: 'product-comment',
                                                    },
                                                    {
                                                        text: 'اسلایدر لیستی',
                                                        value: 'items-slider',
                                                    },
                                                ]
                                            }
                                        },
                                        {
                                            component: 'i-select-pro',
                                            if($context) {
                                                return ['home-products',/*'home-products-tabs',*/ 'products',  'creators', 'items-slider'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1;
                                            },
                                            attrs: {
                                                label: 'نوع دیتا',
                                                'field-index': `${$parentIndex}type_data`,
                                                type: 'single',
                                                items: function ($context) {
                                                    if (['home-products-tabs'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1)
                                                        return [
                                                            {
                                                                text: 'محصولات یک دسته بندی',
                                                                value: 'category_products',
                                                            }];
                                                    if (['creators'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1)
                                                        return [
                                                            {
                                                                text: 'پدیدآورندگان',
                                                                value: 'creators',
                                                            }];
                                                    let $items = [
                                                        {
                                                            text: 'دسته‌بندی ها',
                                                            value: 'terms',
                                                        },
                                                        {
                                                            text: 'آخرین محصولات',
                                                            value: 'products',
                                                        },
                                                    ];
                                                    if (['items-slider'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1)
                                                        $items.push(...[
                                                            {
                                                                text: 'محصولات هم‌مجموعه',
                                                                value: 'collection_products',
                                                            },
                                                            {
                                                                text: 'محصولات مرتبط',
                                                                value: 'related_products',
                                                            },
                                                            {
                                                                text: 'پدیدآورندگان',
                                                                value: 'creators',
                                                            },
                                                        ])
                                                    return $items;
                                                }
                                            }
                                        },
                                        {
                                            component: 'i-select-pro',
                                            if($context) {
                                                return ['home-articles', 'articles'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1;
                                            },
                                            attrs: {
                                                label: 'نوع دیتا',
                                                'field-index': `${$parentIndex}type_data`,
                                                type: 'single',
                                                items: [
                                                    {
                                                        text: 'آخرین اخبار',
                                                        value: 'articles',
                                                    },
                                                    {
                                                        text: 'اخبار یک دسته بندی',
                                                        value: 'category_articles',
                                                    },
                                                    {
                                                        text: 'دسته بندی ها',
                                                        value: 'terms',
                                                    },
                                                ]
                                            }
                                        },
                                        {
                                            component: 'i-select-pro',
                                            if($context) {
                                                return ['home-terms'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1;
                                            },
                                            attrs: {
                                                label: 'نوع دیتا',
                                                'field-index': `${$parentIndex}type_data`,
                                                type: 'single',
                                                items: [
                                                    {
                                                        text: 'دسته‌بندی‌ها از سربرگ',
                                                        value: 'categories_header',
                                                    },
                                                    {
                                                        text: 'آخرین دسته‌بندی‌ها',
                                                        value: 'last_terms',
                                                    },
                                                ]
                                            }
                                        },
                                        {
                                            component: 'i-select-pro',
                                            if($context) {
                                                return ['home-terms', 'home-products','home-products-tabs', 'products', 'items-slider'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1;
                                            },
                                            attrs: {
                                                label: 'نوع نوشته',
                                                'field-index': `${$parentIndex}post_type`,
                                                type: 'single',
                                                items: [
                                                    {
                                                        text: 'کتاب',
                                                        value: 'book',
                                                    },
                                                    {
                                                        text: 'پدیدآورنده',
                                                        value: 'book_creator',
                                                    },
                                                    {
                                                        text: 'مقاله',
                                                        value: 'article',
                                                    },
                                                ]
                                            }
                                        },
                                        {
                                            component: 'i-select-pro',
                                            if($context) {
                                                return ['home-start'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1;
                                            },
                                            attrs: {
                                                label: 'اسلایدر',
                                                'field-index': `${$parentIndex}slider_id`,
                                                url: 'sliders/data',
                                                query: {
                                                    status: 'publish'
                                                },
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-switch',
                                            if($context) {
                                                return ['home-start', 'products'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1;
                                            },
                                            attrs: {
                                                label: 'نمایش عنوان',
                                                'field-index': `${$parentIndex}is_title`,
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-switch',
                                            if($context) {
                                                return ['home-start'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1;
                                            },
                                            attrs: {
                                                label: 'نمایش توضیحات',
                                                'field-index': `${$parentIndex}is_description`,
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-switch',
                                            if($context) {
                                                return ['home-start'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1;
                                            },
                                            attrs: {
                                                label: 'نمایش دکمه ها',
                                                'field-index': `${$parentIndex}is_buttons`,
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-switch',
                                            if($context) {
                                                return ['home-start'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1;
                                            },
                                            attrs: {
                                                label: 'حالت رسپانسور',
                                                'field-index': `${$parentIndex}is_responsive`,
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-switch',
                                            if($context) {
                                                return ['products', 'creators'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1;
                                            },
                                            attrs: {
                                                label: 'فیلترینگ',
                                                'field-index': `${$parentIndex}is_filter`,
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-input',
                                            if($context) {
                                                return ['home-start'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1 && $context.getValue(`${$parentIndex}is_responsive`, false) !== true;
                                            },
                                            attrs: {
                                                label: 'تعداد نمایش در حالت عادی',
                                                'field-index': `${$parentIndex}view_count`,
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-input',
                                            if($context) {
                                                return ['home-start'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1 && $context.getValue(`${$parentIndex}is_responsive`) === true;
                                            },
                                            attrs: {
                                                label: 'تعداد نمایش در حالت دسکتاپ بزرگ',
                                                'field-index': `${$parentIndex}count.desktop2x`,
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-input',
                                            if($context) {
                                                return ['home-start'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1 && $context.getValue(`${$parentIndex}is_responsive`) === true;
                                            },
                                            attrs: {
                                                label: 'تعداد نمایش در حالت دسکتاپ عادی',
                                                'field-index': `${$parentIndex}count.desktop`,
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-input',
                                            if($context) {
                                                return ['home-start'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1 && $context.getValue(`${$parentIndex}is_responsive`) === true;
                                            },
                                            attrs: {
                                                label: 'تعداد نمایش در حالت تبلت یا آی پد',
                                                'field-index': `${$parentIndex}count.tablet`,
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-input',
                                            if($context) {
                                                return ['home-start'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1 && $context.getValue(`${$parentIndex}is_responsive`) === true;
                                            },
                                            attrs: {
                                                label: 'تعداد نمایش در حالت موبایل',
                                                'field-index': `${$parentIndex}count.mobile`,
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-select-pro',
                                            if($context) {
                                                return ['category_products'].indexOf($context.getValue(`${$parentIndex}type_data`)) !== -1 && ['products', 'home-products', 'home-products-tabs'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1;
                                            },
                                            attrs: {
                                                label: 'دسته بندی',
                                                'field-index': `${$parentIndex}term_id`,
                                                type: 'array',
                                                url: 'terms/data',
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                                query: function () {
                                                    return {
                                                        parent: 0,
                                                        filter: {
                                                            type: 'type',
                                                            value: 'product'
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            component: 'i-select-pro',
                                            if($context) {
                                                return ['category_articles'].indexOf($context.getValue(`${$parentIndex}type_data`)) !== -1 && ['articles', 'home-articles'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1;
                                            },
                                            attrs: {
                                                label: 'دسته بندی',
                                                'field-index': `${$parentIndex}term_id`,
                                                type: 'array',
                                                url: 'terms/data',
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                                query: function () {
                                                    return {
                                                        parent: 0,
                                                        filter: {
                                                            type: 'type',
                                                            value: 'article'
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            component: 'i-input',
                                            if($context) {
                                                return ['home-articles', 'home-products', 'home-products-tabs'].indexOf($context.getValue(`${$parentIndex}template`)) === -1;
                                            },
                                            attrs: {
                                                label: 'رنگ متن',
                                                'field-index': `${$parentIndex}text_color`,
                                                type: 'color',
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-input',
                                            if($context) {
                                                return ['home-articles'].indexOf($context.getValue(`${$parentIndex}template`)) === -1;
                                            },
                                            attrs: {
                                                label: 'رنگ پس زمینه',
                                                'field-index': `${$parentIndex}bg_color`,
                                                type: 'color',
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-switch',
                                            if($context) {
                                                return ['home-start', 'home-about','home-services', 'classic'].indexOf($context.getValue(`${$parentIndex}template`)) === -1;
                                            },
                                            attrs: {
                                                label: 'تمام صفحه',
                                                'field-index': `${$parentIndex}is_fullscreen`,
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-switch',
                                            if($context) {
                                                return ['media', 'text-media',].indexOf($context.getValue(`${$parentIndex}template`)) !== -1;
                                            },
                                            attrs: {
                                                label: 'حالت دایره رسانه',
                                                'field-index': `${$parentIndex}is_circle`,
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-switch',
                                            if($context) {
                                                return ['media', 'text-media'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1;
                                            },
                                            attrs: {
                                                label: 'حالت زوم متن',
                                                'field-index': `${$parentIndex}is_zoom`,
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-switch',
                                            if($context) {
                                                return ['media', 'text-media'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1;
                                            },
                                            attrs: {
                                                label: 'برعکس',
                                                'field-index': `${$parentIndex}is_revert`,
                                                css: {
                                                    ...css,
                                                    section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-file',
                                            if($context) {
                                                return ['home-start', 'home-articles', 'home-products', 'home-products-tabs'].indexOf($context.getValue(`${$parentIndex}template`)) === -1;
                                            },
                                            attrs: {
                                                css: {
                                                    section: 'w-full md:w-1/3 xl:w-1/4 items-end',
                                                },
                                                btnTitle: 'تصویر پس زمینه',
                                                'field-index': {
                                                    store: `${$parentIndex}bg_image_file`,
                                                    get: `${$parentIndex}bg_image`
                                                }
                                            }
                                        },
                                        {
                                            component: 'i-file',
                                            if($context) {
                                                return ['media', 'text-media', 'home-about',].indexOf($context.getValue(`${$parentIndex}template`)) !== -1;
                                            },
                                            attrs: {
                                                label: 'تصویر',
                                                'field-index': {
                                                    store: `${$parentIndex}image_file`,
                                                    get: `${$parentIndex}image`
                                                },
                                                css: css,
                                                options: {
                                                    'just-input': true
                                                }
                                            }
                                        },
                                        {
                                            component: 'i-file',
                                            if($context) {
                                                return ['media', 'text-media', 'home-about',].indexOf($context.getValue(`${$parentIndex}template`)) !== -1;
                                            },
                                            attrs: {
                                                label: 'فیلم',
                                                'field-index': {
                                                    store: `${$parentIndex}video_file`,
                                                    get: `${$parentIndex}video`
                                                },
                                                css: css,
                                                options: {
                                                    'just-input': true
                                                }
                                            }
                                        },
                                        {
                                            component: 'i-file',
                                            if($context) {
                                                return ['media', 'text-media'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1;
                                            },
                                            attrs: {
                                                label: 'سند',
                                                'field-index': {
                                                    store: `${$parentIndex}document_file`,
                                                    get: `${$parentIndex}document`
                                                },
                                                css: css,
                                                options: {
                                                    'just-input': true
                                                }
                                            }
                                        },
                                        {
                                            component: 'i-ckeditor',
                                            if($context) {
                                                return ['home-start', 'home-products', 'home-products-tabs', 'home-services', 'home-articles', 'home-terms'].indexOf($context.getValue(`${$parentIndex}template`)) === -1;
                                            },
                                            attrs: {
                                                label: 'توضیحات',
                                                'field-index': `${$parentIndex}description`,
                                                css: {
                                                    ...css,
                                                    section: 'w-full p-2',
                                                },
                                            }
                                        },
                                        {
                                            component: 'i-repeater-accordion',
                                            if($context) {
                                                return ['media', 'text-media', 'banner', 'home-about', 'home-articles'].indexOf($context.getValue(`${$parentIndex}template`)) !== -1;
                                            },
                                            attrs: {
                                                id: `custom_actions_${index}_repeater_accordion`,
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
                                                                        component: 'i-input',
                                                                        attrs: {
                                                                            label: 'لینک',
                                                                            'field-index': `${$actionIndex}link`,
                                                                            type: 'url',
                                                                            css: {
                                                                                field: 'ltr',
                                                                                section: 'w-full md:w-2/3 xl:w-3/4 p-2',
                                                                            },
                                                                        }
                                                                    },

                                                                    {
                                                                        component: 'i-input',
                                                                        attrs: {
                                                                            label: 'رنگ متن',
                                                                            'field-index': `${$actionIndex}text_color`,
                                                                            type: 'color',
                                                                            css: {
                                                                                ...css,
                                                                                section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                                            },
                                                                        }
                                                                    },
                                                                    {
                                                                        component: 'i-input',
                                                                        attrs: {
                                                                            label: 'رنگ پس زمینه',
                                                                            'field-index': `${$actionIndex}bg_color`,
                                                                            type: 'color',
                                                                            css: {
                                                                                ...css,
                                                                                section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                                            },
                                                                        }
                                                                    },
                                                                    {
                                                                        component: 'i-input',
                                                                        attrs: {
                                                                            label: 'رنگ پس زمینه (کلیک)',
                                                                            'field-index': `${$actionIndex}bg_color_hover`,
                                                                            type: 'color',
                                                                            css: {
                                                                                ...css,
                                                                                section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                                            },
                                                                        }
                                                                    },
                                                                    {
                                                                        component: 'i-file',
                                                                        attrs: {
                                                                            label: 'سند',
                                                                            'field-index': {
                                                                                store: `${$actionIndex}document_file`,
                                                                                get: `${$actionIndex}document`
                                                                            },
                                                                            css: {
                                                                                ...css,
                                                                                section: 'w-full md:w-1/3 xl:w-1/4 p-2',
                                                                            },
                                                                            options: {
                                                                                'just-input': true
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
                        ]
                    }
                }
            },
        ]
        return $items;
    }
};
export default CustomPage
