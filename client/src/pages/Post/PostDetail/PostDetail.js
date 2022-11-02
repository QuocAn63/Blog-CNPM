import React from 'react'
import MetaItem from '~/components/MetaItem';
import TagContainer from '~/components/TagContainer';
import PostControllerSidebar from '~/layout/components/PostControllerSidebar';

function createMarkup(content) {
  return { __html: content };
}

function PostDetail(props) {
  const { title, content, tags } = props

  return (
    <div className="bg-white rounded shadow p-5 relative">
      <div className="pb-8">
        <p className="text-sm text-gray-500">Đã đăng vào khoảng 15 giờ trước</p>
        <div className="flex gap-5 mt-2">
          <MetaItem title="comments" content="0" large />
          <MetaItem title="bookmarks" content="0" large />
        </div>
      </div>
      <div className="mb-3">
        <p className="font-bold text-4xl">{title}</p>
      </div>
      <div className="py-5">
        <div dangerouslySetInnerHTML={createMarkup(content)}></div>
      </div>
      <div className="py-5">
        <TagContainer tags={tags} />
      </div>
      <div className="absolute right-full top-0 bottom-0">
        <PostControllerSidebar {...props} bookmark report />
      </div>
    </div>
  )
}

export default PostDetail