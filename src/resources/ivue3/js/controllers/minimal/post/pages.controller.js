/*
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/3/21, 7:27 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

import {markRaw} from "vue";

const PageAppController = {
    index: {
        name: 'PagesIndex',
        title: 'صفحات',
        template: {
            component: 'i-datatable-list',
            attrs: {
                resource: 'pages',
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
        name: 'PagesCreate',
        idName: 'id',
        template: {
            component: 'i-page-create',
            attrs: {
                storeNamespace: 'PagesSingle'
            }
        }
    },
    edit: {
        name: 'PagesIndex',
        clone: 'pages.create'
    },
};

export default PageAppController;
