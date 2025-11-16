let HomePage = {
    fields: function (local, $context) {
        let $parentIndex = local === "fa" ? 'content.' : `locals.${local}.content.`;
        let css = {
            section: 'w-full',
        };
        if (local === "en") css.field = 'ltr';
        let $items = [
            {
                component: 'i-input',
                attrs: {
                    label: 'عنوان سازمان ها',
                    'field-index': `${$parentIndex}organizations.title`,
                    css: css,
                }
            },
            {
                component: 'i-input',
                attrs: {
                    label: 'توضیحات سازمان ها',
                    'field-index': `${$parentIndex}organizations.description`,
                    type: 'textarea',
                    css: css
                }
            },
            {
                component: 'i-input',
                attrs: {
                    label: 'عنوان برند ها',
                    'field-index': `${$parentIndex}brands.title`,
                    css: css,
                }
            },
            {
                component: 'i-input',
                attrs: {
                    label: 'توضیحات برند ها',
                    'field-index': `${$parentIndex}brands.description`,
                    type: 'textarea',
                    css: css
                }
            },
            {
                component: 'i-input',
                attrs: {
                    label: 'عنوان خبر ها',
                    'field-index': `${$parentIndex}articles.title`,
                    css: css,
                }
            },
            {
                component: 'i-input',
                attrs: {
                    label: 'توضیحات خبر ها',
                    'field-index': `${$parentIndex}articles.description`,
                    type: 'textarea',
                    css: css
                }
            },
            {
                component: 'i-input',
                attrs: {
                    label: 'عنوان محصولات',
                    'field-index': `${$parentIndex}products.title`,
                    css: css,
                }
            },
            {
                component: 'i-input',
                attrs: {
                    label: 'توضیحات محصولات',
                    'field-index': `${$parentIndex}products.description`,
                    type: 'textarea',
                    css: css
                }
            },
            {
                component: 'i-input',
                attrs: {
                    label: 'عنوان سکتور ها',
                    'field-index': `${$parentIndex}sectors.title`,
                    css: css,
                }
            },
            {
                component: 'i-input',
                attrs: {
                    label: 'توضیحات سکتور ها',
                    'field-index': `${$parentIndex}sectors.description`,
                    type: 'textarea',
                    css: css
                }
            }
        ]
        return $items;
    }
};
export default HomePage
