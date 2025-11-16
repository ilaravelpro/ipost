import PostTemplate from "@/js/handel/store/data/app/posts/template.js";
import StoreDataSingle from "ivue3/js/handel/functions/store/data/single.func.js";
const ArticlesSingle =  Object.assign({}, StoreDataSingle);
let baseState = ArticlesSingle.store.state();
ArticlesSingle.init({
    id: 'ArticlesSingle',
    state: () => {
        baseState.options.typeForm = 'formData';
        return {
            ...baseState,
            resource: 'articles',
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
                return PostTemplate($context, 'article');
            },
        }
    },
})

export default ArticlesSingle;
