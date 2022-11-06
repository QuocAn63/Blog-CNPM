import config from '~/config';

// Layout
import { DefaultSidebarless } from '~/layout';
import FullScreen from '~/layout/FullScreen';

// Sidebar
import { PostSidebar } from '~/layout/components/Sidebar';

// Pages
import HomePage from '~/pages/Home';
import PostsPage from '~/pages/Posts';
import QuestionsPage from '~/pages/Questions';
import DiscussionsPage from '~/pages/Discussions';
import PostPage from '~/pages/Post';
import QuestionPage from '~/pages/Question';
import LoginPage from '~/pages/Login';
import PublishPage from '~/pages/Publish';

const publicRoutes = [
   {
      path: config.routes.home,
      component: HomePage,
      exact: true,
   },
   {
      path: config.routes.posts,
      component: PostsPage,
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
      Sidebar: PostSidebar,
   },
   {
      path: config.routes.question,
      component: QuestionPage,
      Sidebar: PostSidebar,
   },
   {
      path: config.routes.login,
      component: LoginPage,
      layout: null,
   },
   {
      path: config.routes.register,
      component: LoginPage,
      layout: null,
   },
   {
      path: config.routes.publish,
      component: PublishPage,
      layout: FullScreen,
      subPath: [
         {
            path: 'post',
            component: PublishPage,
         },
         {
            path: 'question',
            component: PublishPage,
         },
      ],
   },
];

export { publicRoutes };
