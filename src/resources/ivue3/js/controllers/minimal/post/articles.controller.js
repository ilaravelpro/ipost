/*
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/3/21, 7:27 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

import {markRaw} from "vue";

const ArticleAppController = {
    index: {
        name: 'ArticlesIndex',
        title: 'مقالات',
        template: {
            component: 'i-datatable-list',
            attrs: {
                resource: 'articles',
                columns: [
                    {
                        label: 'شناسه',
                        name: 'id',
                    },
                    {
                        label: 'تصویر',
                        name: 'image',
                        template: { component: 'i-datatable-columns-avatar' }
                    },
                    {label: 'عنوان', name: 'title'},
                ]
            }
        }
    },
    create: {
        name: 'ArticlesCreate',
        idName: 'id',
        template: {
            component: 'i-page-create',
            attrs: {
                storeNamespace: 'ArticlesSingle'
            }
        }
    },
    edit: {
        name: 'ArticlesIndex',
        clone: 'articles.create'
    },
};

export default ArticleAppController;
