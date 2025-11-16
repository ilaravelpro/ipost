/*
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/3/21, 7:27 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

import {markRaw} from "vue";

const ServiceAppController = {
    index: {
        name: 'SlidersIndex',
        title: 'اسلایدر ها',
        template: {
            component: 'i-datatable-list',
            attrs: {
                resource: 'sliders',
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
        name: 'SlidersCreate',
        idName: 'id',
        template: {
            component: 'i-page-create',
            attrs: {
                storeNamespace: 'SlidersSingle'
            }
        }
    },
    edit: {
        name: 'SlidersIndex',
        clone: 'sliders.create'
    },
};

export default ServiceAppController;
