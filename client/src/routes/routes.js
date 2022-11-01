import config from '~/config';

// Layout
import { DefaultWithFeedbar, DefaultSidebarless } from '~/layout';

// Pages
import HomePage from '~/pages/Home';
import PostsPage from '~/pages/Posts';
import QuestionsPage from '~/pages/Questions';
import DiscussionsPage from '~/pages/Discussions';
import PostPage from '~/pages/Post';
import QuestionPage from '~/pages/Question';

const publicRoutes = [
   {
      path: config.routes.home,
      component: HomePage,
      exact: true,
   },
   {
      path: config.routes.posts,
      component: PostsPage,
      layout: DefaultWithFeedbar,
      feedbar: config.itemList.PostsNavList,
      subPath: [
         {
            path: 'followings',
            component: PostsPage,
         },
         {
            path: 'newest',
            component: PostsPage,
         },
         {
            path: 'bookmarks',
            component: PostsPage,
         },
      ],
   },
   {
      path: config.routes.questions,
      component: QuestionsPage,
      layout: DefaultWithFeedbar,
      feedbar: config.itemList.QuestionsNavList,
      subPath: [
         {
            path: 'unsolved',
            component: QuestionsPage,
         },
         {
            path: 'newest',
            component: QuestionsPage,
         },
         {
            path: 'bookmarks',
            component: QuestionsPage,
         },
         {
            path: 'followings',
            component: QuestionsPage,
         },
      ],
   },
   {
      path: config.routes.discussions,
      component: DiscussionsPage,
      layout: DefaultSidebarless,
   },
   {
      path: config.routes.post,
      component: PostPage,
   },
   {
      path: config.routes.question,
      component: QuestionPage,
   },
];

export { publicRoutes };
