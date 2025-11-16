/*
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/3/21, 7:27 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

import {markRaw} from "vue";

const CommentsMinimalController = {
    index: {
        name: 'CommentsIndex',
        template: {
            component: 'i-datatable-list',
            attrs: {
                resource: 'comments',
                columns: [
                    {
                        label: 'شناسه',
                        name: 'id',
                    },
                    {label: 'عنوان', name: 'name'},
                    {label: 'متن', name: 'text'},
                    {label: 'امتیاز کلی', name: 'score'},
                ]
            }
        }
    },
    create: {
        name: 'CommentsCreate',
        idName: 'id',
        template: {
            component: 'i-page-create',
            attrs: {
                storeNamespace: 'CommentsSingle'
            }
        }
    },
    edit: {
        name: 'CommentsIndex',
        clone: 'comments.create'
    },
};

export default CommentsMinimalController;
