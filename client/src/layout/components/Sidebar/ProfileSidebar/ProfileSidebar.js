import React from 'react'
import { Link } from 'react-router-dom'
import config from '~/config'

function ProfileSidebar({ pathname }) {
  return (
    <div className="bg-white border border-gray-300 rounded">
      <div className="p-5">
        {config.itemList.ProfileSidebarList.map((item, index) => (
          <Link to={`${pathname}/${item.path}`} key={index} className="flex justify-between py-1">
            <span className="text-sm text-gray-500">{item.name}</span>
            <span className="text-sm font-bold">{item.value}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProfileSidebar