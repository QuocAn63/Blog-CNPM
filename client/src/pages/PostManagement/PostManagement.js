import React from 'react'
import { PostManagementFilter } from '~/layout/components/Filter'
import { PostManagementMenu } from '~/layout/components/Menu'

function PostManagement() {
    return (
        <div className="grid grid-cols-12 gap-8">
            <div className="col-span-3">
                <PostManagementMenu />
            </div>
            <div className="col-span-9">
                <PostManagementFilter />
            </div>
        </div>
    )
}

export default PostManagement