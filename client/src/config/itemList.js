import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

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
      title: 'Series',
      path: '/series',
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

const ProfileNavList = [
   {
      name: 'Bài đăng',
      path: '',
      exact: true,
   },
   {
      name: 'Series',
      path: 'series',
   },
   {
      name: 'Thẻ',
      path: 'tags',
   },
   {
      name: "Bookmarks",
      path: "bookmarks"
   },
   {
      name: "Đang theo dõi",
      path: "followings"
   },
   {
      name: "Người theo dõi",
      path: "followers"
   }
]

const ProfileSidebarList = [
   {
      name: 'Bài đăng',
      path: '',
      value: 0
   },
   {
      name: 'Series',
      path: 'series',
      value: 0
   },
   {
      name: 'Thẻ',
      path: 'tags',
      value: 0
   },
   {
      name: "Bookmarks",
      path: "bookmarks",
      value: 0
   },
   {
      name: "Đang theo dõi",
      path: "followings",
      value: 0
   },
   {
      name: "Người theo dõi",
      path: "followers",
      value: 0
   }
]

const SeriesNavList = {
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
   title: 'Tạo series mới',
   icon: faPlus,
   path: '/publish/series',
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

const MeManagementMenu = [{
   title: "Bài viết",
   icon: faPen,
   children: [

   ]
}]

export { GlobalNavList, PostsNavList, SeriesNavList, ProfileNavList, ProfileSidebarList, authFormData };
