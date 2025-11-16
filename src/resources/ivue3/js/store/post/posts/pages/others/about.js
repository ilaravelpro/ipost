let AboutPage = {
    html: {
        classes: {
            fields: {
                global: {
                    section: 'w-full'
                }
            }
        },
    },
    fields: function (local, $context) {
        let $parentIndex = local === "fa" ? 'content.' : `locals.${local}.content.`;
        let css = {
            section: 'w-full'
        };
        if (local === "en") css.field = 'ltr';
        let $items = [
            {
                component: 'i-ckeditor',
                attrs: {
                    label: 'عنوان اولیه',
                    'field-index': `${$parentIndex}title_first`,
                    css: css,
                }
            },
            {
                component: 'i-file',
                attrs: {
                    label: 'تصویر باکس اول',
                    'field-index': {
                        store: `${$parentIndex}box1.image_file`,
                        get: `${$parentIndex}box1.image`
                    },
                    css: css,
                }
            },
            {
                component: 'i-input',
                attrs: {
                    label: 'عنوان باکس اول',
                    'field-index': `${$parentIndex}box1.title`,
                    css: css,
                }
            },
            {
                component: 'i-ckeditor',
                attrs: {
                    label: 'توضیحات باکس اول',
                    'field-index': `${$parentIndex}box1.description`,
                    css: css,
                }
            },
            {
                component: 'i-file',
                attrs: {
                    label: 'فیلم باکس دوم',
                    'field-index': {
                        store: `${$parentIndex}box2.movie_file`,
                        get: `${$parentIndex}box2.movie`
                    },
                    css: css,
                    options: {
                        'just-input': true
                    }
                }
            },
            {
                component: 'i-ckeditor',
                attrs: {
                    label: 'توضیحات باکس دوم',
                    'field-index': `${$parentIndex}box2.description`,
                    css: css,
                }
            },
            {
                component: 'i-input',
                attrs: {
                    label: 'عنوان باکس سوم',
                    'field-index': `${$parentIndex}box3.title`,
                    css: css,
                }
            },
            {
                component: 'i-ckeditor',
                attrs: {
                    label: 'توضیحات باکس سوم',
                    'field-index': `${$parentIndex}box3.description`,
                    css: css,
                }
            },
            {
                component: 'i-input',
                attrs: {
                    label: 'عنوان باکس چهارم',
                    'field-index': `${$parentIndex}box4.title`,
                    css: css,
                }
            },
            {
                component: 'i-file',
                attrs: {
                    label: 'فایل باکس چهارم',
                    'field-index': {
                        store: `${$parentIndex}box4.doc_file`,
                        get: `${$parentIndex}box4.doc`
                    },
                    css: css,
                    options: {
                        'just-input': true
                    }
                }
            },
            {
                component: 'i-input',
                attrs: {
                    label: 'عنوان دکمه باکس چهارم',
                    'field-index': `${$parentIndex}box4.btn_title`,
                    css: css,
                }
            },
            {
                component: 'i-input',
                attrs: {
                    label: 'عنوان باکس پنجم',
                    'field-index': `${$parentIndex}box5.title`,
                    css: css,
                }
            },
            {
                component: 'i-ckeditor',
                attrs: {
                    label: 'توضیحات باکس پنجم',
                    'field-index': `${$parentIndex}box5.description`,
                    css: css,
                }
            },
        ]
        return $items;
    }
};


export default AboutPage
