import React from 'react'
import { MeManagementMenu } from '~/layout/components/Menu'

function PostManagement() {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-3">
                <MeManagementMenu />
            </div>
            <div className="col-span-9"></div>
        </div>
    )
}

export default PostManagement