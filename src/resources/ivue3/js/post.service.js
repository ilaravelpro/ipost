import TermsSingle from './store/post/terms/single.js';
import CommentsSingle from './store/post/comments/single.js';

import ArticlesSingle from './store/post/posts/articles/single.js'
import PagesSingle from './store/post/posts/pages/single.js'
import MenusSingle from './store/post/posts/menus/single.js'
import SlidersSingle from './store/post/posts/sliders/single.js'

import TermMinimalController from "./controllers/minimal/post/terms.controller.js";
import PageAppController from "./controllers/minimal/post/pages.controller.js";
import ArticleAppController from "./controllers/minimal/post/articles.controller.js";
import ServiceAppController from "./controllers/minimal/post/sliders.controller.js";
import CommentsMinimalController from "./controllers/minimal/post/comments.controller.js";
import MenuMinimalController from "./controllers/minimal/post/menus.controller.js";


export const PostStoreService = [
    TermsSingle,
    CommentsSingle,
    ArticlesSingle,
    PagesSingle,
    MenusSingle,
    SlidersSingle,
];

export const PostControllerService = {
    terms: TermMinimalController,
    comments: CommentsMinimalController,
    pages: PageAppController,
    articles: ArticleAppController,
    sliders: ServiceAppController,
    menus: MenuMinimalController,
};
export const PostTranslateService = {
    fa: {
        routes: {
            terms: {
                self: 'دسته بندی ها',
                single: 'دسته بندی',
            },
            articles: {
                self: 'مقالات',
                single: 'مقاله',
            },
            pages: {
                self: 'صفحات',
                single: 'صفحه',
            },
            sliders: {
                self: 'اسلایدر ها',
                single: 'اسلایدر',
            },
            menus: {
                self: 'منو ها',
                single: 'منو',
            },
            comments: {
                self: 'نظرات',
                single: 'نظر',
            },
        }
    }
};
export const PostRouterService = (EventHub, routerService) => {
    return [
        {
            path: '/post',
            name: 'post',
            redirect: 'profile',
            children: [
                ...['terms', 'pages', 'articles', 'sliders', 'comments', 'menus']
                    .map(name => routerService.generateResource(name, name, EventHub))
            ]
        }
    ]
};

export default {PostStoreService, PostControllerService, PostTranslateService, PostRouterService};
