import React from 'react'
import UserSidebar from '../UserSidebar'
import FakeData from '~/FakeData';
import MetaItem from '~/components/MetaItem';

function PostSidebar() {
  return (
    <div>
      <div className="bg-white rounded shadow p-5">
        <UserSidebar {...FakeData.Authors.author} />
        <div className="mt-3">
          <div className="flex items-center gap-10 w-full">
            <MetaItem title="points" content="0" />
            <MetaItem title="followers" content="0" />
            <MetaItem title="posts" content="0" />
          </div>
        </div>
      </div>
      <div className="bg-white rounded shadow p-5 mt-10">

      </div>
    </div>
  )
}

export default PostSidebar