import React from 'react'
import NotifyItem from '~/components/NotifyItem'
import { PostContainer } from '~/components/PostContainer'
import fakeData from '~/FakeData'

function Notifications() {
  return (
    <>
      <div className="flex items-end">
        <span className="font-bold text-xl">Thông báo</span>
        <div className="flex-1 h-full border-b ml-2 border-gray-300"></div>
      </div>
      <div className="mt-5">
        <PostContainer list={fakeData.Notifications.notificationsList} Component={NotifyItem} pagination={false} />
      </div>
    </>
  )
}

export default Notifications