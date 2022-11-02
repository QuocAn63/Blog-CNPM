import React from 'react'
import UserSidebar from '../UserSidebar'
import FakeData from '~/FakeData';
import MetaItem from '~/components/MetaItem';

function PostSidebar(props) {
  const { points, followers, posts, questions } = FakeData.Authors.author
  let meta = { points, followers, posts, questions }
  meta = Object.keys(meta).map(key => ({
    title: key,
    value: meta[key]
  }))

  return (
    <div>
      <div className="bg-white rounded shadow p-5">
        <UserSidebar {...FakeData.Authors.author} />
        <div className="mt-3">
          <div className="flex items-center gap-10 w-full">
            {
              meta.map((item, index) => <MetaItem title={item.title} key={index} content={item.value.toString()} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostSidebar