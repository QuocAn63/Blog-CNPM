import React from 'react'
import { Link } from 'react-router-dom'
import { ProfileFeedbar } from '~/components/Filter/'
import { ProfileSidebar } from '~/layout/components/Sidebar'
import Image from '~/components/Image'

function Profile() {
  return (
    <div>
      <div className="bg-white rounded border border-gray-300">
        <div className="flex items-center px-5 py-6">
          <Link >
            <Image src="" className="rounded-full w-20 h-20 block border border-gray-200" />
          </Link>
          <div className="ml-4">
            <div className="flex flex-col justify-center h-full">
              <p className="text-xl font-medium">Cao An</p>
              <p className="text-gray-400">@caoan</p>
            </div>
          </div>
        </div>
        <ProfileFeedbar />
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-9">
            <div className="min-h-[400px] bg-white rounded border border-gray-300 shadow p-5">
              <h2 className="text-center font-bold text-gray-400">Không có gì</h2>
            </div>

          </div>
          <div className="col-span-3">
            <ProfileSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile