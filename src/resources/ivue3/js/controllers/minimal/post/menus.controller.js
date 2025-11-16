/*
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/3/21, 7:27 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

import {markRaw} from "@vue/compat";

const MenuMinimalController = {
    index: {
        name: 'MenusIndex',
        title: 'منو ها',
        template: {
            component: 'i-datatable-list',
            attrs: {
                resource: 'menus',
                columns: [
                    {
                        label: 'شناسه',
                        name: 'id',
                    },
                    {label: 'عنوان', name: 'title'},
                    {label: 'اسلاگ', name: 'slug'},
                ]
            }
        }
    },
    create: {
        name: 'MenusCreate',
        idName: 'id',
        template: {
            component: 'i-page-create',
            attrs: {
                storeNamespace: 'MenusSingle'
            }
        }
    },
    edit: {
        name: 'MenusIndex',
        clone: 'menus.create'
    },
};

export default MenuMinimalController;
