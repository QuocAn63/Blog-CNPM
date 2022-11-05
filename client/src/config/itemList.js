import { faPen, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const GlobalNavList = [
   {
      title: 'Trang chủ',
      path: '/',
      end: true,
   },
   {
      title: 'Bài viết',
      path: '/posts',
   },
   {
      title: 'Hỏi đáp',
      path: '/questions',
   },
   {
      title: 'Thảo luận',
      path: '/discussions',
   },
];

const PostsNavList = {
   list: [
      {
         name: 'Đang theo dõi',
         path: 'followings',
         exact: true,
      },
      {
         name: 'Mới nhất',
         path: 'newest',
      },
      {
         name: 'Đánh giá cao',
         path: 'ratings',
      },
      {
         name: 'Bookmarks của tôi',
         path: 'bookmarks',
      },
   ],
   title: 'Viết bài',
   icon: faPen,
   path: '/publish/post',
};

const QuestionsNavList = {
   list: [
      {
         name: 'Đang theo dõi',
         path: 'followings',
         exact: true,
      },
      {
         name: 'Mới nhất',
         path: 'newest',
      },
      {
         name: 'Chưa giải quyết',
         path: 'unsolved',
      },
      {
         name: 'Bookmarks của tôi',
         path: 'bookmarks',
      },
   ],
   title: 'Đặt câu hỏi',
   icon: faQuestionCircle,
   path: '/publish/question',
};

const authFormData = {
   login: {
      title: "Đăng nhập",
      inputs: [{
         name: "username",
         label: "Tên tài khoản hoặc Email",
         placeholder: "Nhập tên tài khoản hoặc địa chỉ Email"
      }, {
         name: "password",
         type: "password",
         label: "Mật khẩu",
         placeholder: "Nhập mật khẩu"
      }]
   },
   register: {
      title: "Đăng ký",
      inputs: [{
         name: "fullname",
         label: "Tên của bạn",
         placeholder: "Nhập tên của bạn"
      }, {
         name: "username",
         label: "Tên tài khoản",
         placeholder: "Nhập tên tài khoản"
      },
      {
         name: "email",
         label: "Địa chỉ Email",
         placeholder: "Nhập địa chỉ Email"
      }, {
         name: "password",
         type: "password",
         label: "Mật khẩu",
         placeholder: "Nhập mật khẩu"
      },
      {
         name: "retypepassword",
         type: "retypepassword",
         label: "Xác nhận mật khẩu",
         placeholder: "Nhập lại mật khẩu"
      }]
   }
}
export { GlobalNavList, PostsNavList, QuestionsNavList, authFormData };
