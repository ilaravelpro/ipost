/*
 * Author: Amir Hossein Jahani | iAmir.net
 * Last modified: 2/3/21, 7:27 PM
 * Copyright (c) 2021. Powered by iamir.net
 */

import {markRaw} from "vue";
const DataIndexColumns = [
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
    {label: 'نام یکتا', name: 'slug'},
];
const TermMinimalController = {
    index: {
        name: 'TermsIndex',
        title: 'دسته بندی ها',
        template: {
            component: 'i-datatable-list',
            attrs: {
                resource: 'terms',
                columns: DataIndexColumns
            }
        }
    },
    create: {
        name: 'TermsSingle',
        subtitle: 'افزودن',
        idName: 'id',
        template: {
            component: markRaw({
                name: 'TermsSingle',
                template: `
                  <div class="w-full">
                    <i-page-create :store-namespace="storeNamespace" :rows="rowsPage" multiple>
                      <template v-slot:row.terms.header="{ row, namespace }">
                        <div class="w-full min-h-[52px] px-0 lg:px-2 flex flex-warp justify-between">
                          <h3>{{ row.title }}</h3>
                          <div class="">
                            <router-link
                                :to="{name: 'terms.create'}"
                                v-slot="{ href, navigate, isActive, isExactActive }"
                            >
                              <a :href="href" @click="navigate" class="focus:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-secondary transition duration-150 ease-in-out hover:bg-primary bg-secondary rounded text-white px-8 py-2 text-sm mr-2">
                                ایجاد
                              </a>
                            </router-link>
                          </div>
                        </div>
                      </template>
                      <template v-slot:row.terms.body="{ row, namespace }">
                        <i-datatable-list
                            v-if="iRecord.id == id"
                            :columns="columns_terms"
                            resource="terms"
                            :id="id"
                            url="terms"
                            :filter="false"
                            :status="false"
                            :baseFilter="[
                        {
                            type: 'parents',
                            value: id
                        }
                    ]"
                            sortKeyBase="code"
                            :orderKeyBase="1"
                            class="no-padding"
                        >
                          <template v-slot:item.status="{ item }">
                            <template v-if="item.status">{{ item.status_text }}</template>
                          </template>
                        </i-datatable-list>
                      </template>
                    </i-page-create>
                  </div>
                `,
                data() {
                    return {
                        storeNamespace: 'TermsSingle',
                        columns_terms: DataIndexColumns,
                    }
                },
                computed: {
                    id() {
                        return this.$route.params.id
                    },
                    iRecord() {
                        return this.$iStore.getter(this.storeNamespace ,'iRecord')
                    },
                    rowsPage() {
                        let rows = {
                            general: {
                                title: 'اصلی',
                                name: 'general',
                                class: 'w-full',
                            }};
                        if (typeof(this.$route.params.id) !== 'undefined')
                            rows['terms'] = {
                                title: 'دسته ها',
                                name: 'terms',
                                class: 'w-full',
                                btn: false
                            }
                        return rows;
                    },
                },
            })
        }
    },
    edit: {
        name: 'TermsEdit',
        clone: 'terms.create'
    }
};

export default TermMinimalController;
