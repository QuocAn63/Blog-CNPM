import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faEarthAmerica, faList, faLock, faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

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

const SearchNavList = [{
   name: "Bài đăng",
   type: "post"
},
{
   name: "Người dùng",
   type: "user"
}]


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

const searchFilterList = [{
   title: "Phù hợp nhất",
   sort: "score"
}, {
   title: "Lượt bookmark giảm dần",
   sort: "bookmark"
}, {
   title: "Lượt vote giảm dần",
   sort: "rating"
}, {
   title: "Lượt bình luận giảm dần",
   sort: "comments"
}, {
   title: "Mới nhất",
   sort: "created",
   order: "desc"
}, {
   title: "Cũ nhất",
   sort: "created",
   order: "asc"
}]

const PostManagementMenu = [{
   title: "Bài viết",
   icon: faPen,
   children: [
      {
         title: "Bản nháp",
         icon: faLock,
         to: "/me/posts/drafts"
      },
      {
         title: "Công khai",
         icon: faEarthAmerica,
         to: "/me/posts/public"
      }
   ]
},
{
   title: "Series",
   icon: faList,
   to: "/me/series"
},
{
   title: "Bookmark của tôi",
   icon: faBookmark,
   children: [
      {
         title: "Bài viết",
         icon: faPen,
         to: "/me/bookmarks/posts"
      },
      {
         title: "Series",
         icon: faList,
         to: "/me/bookmarks/series"
      }
   ]
},
{
   title: "Vi phạm",
   icon: faTrash,
   to: "/me/violations"
}]

export { GlobalNavList, PostsNavList, SeriesNavList, ProfileNavList, ProfileSidebarList, authFormData, SearchNavList, searchFilterList, PostManagementMenu };
