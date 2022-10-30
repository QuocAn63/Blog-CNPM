import React from 'react'
import MetaItem from '~/components/MetaItem';
import StickySidebar from '~/components/StickySidebar';

function createMarkup(content) {
  return { __html: content };
}

function PostDetail(props) {
  const { title, content } = props

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
      <div className="absolute right-full top-0 bottom-0">
        <StickySidebar
          offsetTop={64}
          render={() => <div className="px-5 py-2">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <MetaItem title="upvote" className="text-4xl" onClick={() => { alert("upvote") }} placement="right" />
                <span className="py-1 text-4xl text-gray-500">
                  0
                </span>
                <MetaItem title="downvote" className="text-4xl" onClick={() => { alert("upvote") }} placement="right" />
              </div>
              <div className="mt-8 flex flex-col items-center gap-5">
                <MetaItem title="bookmarks" placement="right" className="flex items-center justify-center text-xl border-2 text-gray-400 border-gray-400 rounded-full hover:text-sky-600 hover:border-sky-600 w-10 h-10" onClick={() => { alert("Bookmarks") }} />
                <MetaItem title="report" placement="right" className="flex items-center justify-center border-2 text-gray-400 border-gray-400 rounded-full hover:text-red-500 hover:border-red-500 w-8 h-8" onClick={() => { alert("Report") }} />
              </div>
            </div>
          </div>}
        />
      </div>
    </div>
  )
}

export default PostDetail