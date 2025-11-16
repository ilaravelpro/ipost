let PostTemplate = function ($context, $type, items = [], has_image = undefined) {
    let $fields = function (local, $type) {
        let $parentIndex = local === 'fa' ? '' : `locals.${local}.`;
        let css = {section: 'w-full md:w-1/2 lg:w-1/4'};
        let cssFull = {section: 'w-full'};
        if (local === 'en') {
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
        ];

        if (items instanceof Function)
            $items.push(...items($parentIndex, local, $type, css, cssFull));
        else if (items.length)
            $items.push(...items);

        if (local === 'fa') {
            $items.push(
                {
                    component: 'i-select-pro',
                    attrs: {
                        label: 'وضعیت',
                        'field-index': `${$parentIndex}status`,
                        url: 'data/statuses/' + $type + 's'
                    }
                }
            );
        }
        $items.push({
            component: 'i-input',
            attrs: {
                label: 'توضیحات خلاصه',
                'field-index': `${$parentIndex}summary`,
                type: 'textarea',
                css: cssFull
            }
        });
        if (['publisher', 'book', 'drug'].indexOf($type) !== -1) {
            $items.push({
                component: 'i-tag',
                attrs: {
                    label: 'کلمات کلیدی',
                    'field-index': `${$parentIndex}tags`,
                    css: cssFull
                }
            });
        }
        $items.push({
            component: 'i-ckeditor',
            if($context) {
                return ['custom'].indexOf($context.getValue('template')) === -1;
            },
            attrs: {
                label: 'توضیحات',
                'field-index': `${$parentIndex}content`,
                css: cssFull,
                editorConfig: {
                    language: local
                }
            }
        });
        if (['custom'].indexOf($context.getValue('template')) === -1 && local === 'fa' && ['publisher', 'warehouse', 'book_cover', 'book_size', 'book_creator', 'book_electronic', 'book_sound', 'product_collection'].indexOf($type) === -1) {
            $items.push({
                component: 'i-file',
                attrs: {
                    btnTitle: 'آپلود گالری',
                    css: {
                        section: 'w-full'
                        //'input-group': 'relative flex items-center w-full first:rounded-r first:border-r last:rounded-l last:border-l only:border-t only:border-b only:hover:border-yellow-500 only:focus:border-yellow-500 only:border-gray-300',
                    },
                    'field-index': {
                        store: 'attachments.galleries.uploads',
                        get: 'attachments.galleries.items',
                        delete: 'attachments.galleries.deletes'
                    },
                    multiple: true
                }
            });
        }
        const image_name = $type === 'publisher' ? 'logo' : 'image';
        has_image = has_image !== undefined ? has_image : ['warehouse', 'book_cover', 'book_size'].indexOf($type) === -1;
        return [{
            component: 'i-form-fields',
            attrs: {
                css: {
                    section: (has_image ? 'md:w-5/6 ' : '') + 'w-full p-0 flex flex-wrap'
                },
                items: $items
            }
        }, ...(has_image ? [{
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
                                store: `${$parentIndex}${image_name}_file`,
                                get: `${$parentIndex}${image_name}`
                            }
                        }
                    }
                ]
            }
        }] : [])];
    };
    return $fields('fa', $type);
};
export default PostTemplate;
