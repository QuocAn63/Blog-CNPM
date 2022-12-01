import React from 'react'
import { memo } from 'react'
import { PostContainer } from '~/components/PostContainer'
import { PostItem } from '~/components/PostItem'
import Author from '~/layout/components/Sidebar/StickySidebar/StickySidebarItem/Author'

function SearchResult({ loading, type, result }) {
    let Comp = "div"
    let span = 12

    switch (type) {
        case "post":
            Comp = PostItem
            break;
        case "user":
            Comp = Author
            span = 12
            break;
        default:
            Comp = PostItem
    }
    
    return (
        !loading && (<div>
            <PostContainer list={result} Component={Comp} span={span} />
        </div>)
    )
}

export default memo(SearchResult)