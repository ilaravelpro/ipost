import StoreDataSingle from "ivue3/js/handel/functions/store/data/single.func.js";
import MenuSingleItems from "./items.js";
const MenusSingle =  Object.assign({}, StoreDataSingle);
let baseState = MenusSingle.store.state();

MenusSingle.init({
    id: 'MenusSingle',
    state: () => {
        baseState.options.typeForm = 'formData';
        return {
            ...baseState,
            resource: 'menus',
            html: {
                classes: {
                    fields: {
                        global: {
                            section: 'w-full md:w-1/2 lg:w-1/4'
                        }
                    }
                },
            },
            fields: function ($context) {
                let local = 'fa';
                let $parentIndex = local === "fa" ? '' : `locals.${local}.`;
                let $items = [
                    {
                        component: 'i-input',
                        attrs: {
                            label: 'عنوان',
                            'field-index': `${$parentIndex}title`,
                        }
                    },
                ]
                if (local === "fa") {
                    $items.push(...[
                        {
                            component: 'i-input',
                            attrs: {
                                label: 'اسلاگ',
                                'field-index': `${$parentIndex}slug`,
                            }
                        },
                        {
                            component: 'i-select-pro',
                            attrs: {
                                label: 'وضعیت',
                                'field-index': `${$parentIndex}status`,
                                url: 'data/statuses/sliders',
                            }
                        },
                    ])
                }
                let page = MenuSingleItems
                let filedsother = page.fields(local, $context)
                $items.push(...filedsother)
                return [{
                    component: 'i-form-fields',
                    attrs: {
                        css: {
                            section: 'w-full p-0 flex flex-wrap',
                        },
                        items:$items
                    }
                }];
            }
        }
    },
})

export default MenusSingle;

