import StoreDataSingle from "ivue3/js/handel/functions/store/data/single.func.js";
import SliderSingleItems from "./items.js";
const SlidersSingle =  Object.assign({}, StoreDataSingle);
let baseState = SlidersSingle.store.state();
SlidersSingle.init({
    id: 'SlidersSingle',
    state: () => {
        baseState.options.typeForm = 'formData';
        return {
            ...baseState,
            resource: 'sliders',
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
                let $parentIndex =  '';
                let $items = [
                    {
                        component: 'i-input',
                        attrs: {
                            label: 'عنوان',
                            'field-index': `${$parentIndex}title`,
                        }
                    },
                    {
                        component: 'i-input',
                        attrs: {
                            label: 'اسلاگ',
                            'field-index': `${$parentIndex}slug`,
                        }
                    },
                ]

                $items.push(...[
                    {
                        component: 'i-select-pro',
                        attrs: {
                            label: 'وضعیت',
                            'field-index': `${$parentIndex}status`,
                            url: 'data/statuses/sliders',
                        }
                    },
                ])
                let page = SliderSingleItems
                let filedsother = page.fields('fa', $context)
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

export default SlidersSingle;
