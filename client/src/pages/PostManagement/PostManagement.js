import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PostContainer } from '~/components/PostContainer';
import { PostManagementItem, SeriesManagementItem, ViolationItem } from '~/components/PostItem';
import fakeData from '~/FakeData';
import { PostManagementFilter } from '~/layout/components/Filter';
import { PostManagementMenu } from '~/layout/components/Menu';

function PostManagement() {
   const [Posts, setPosts] = useState({ Component: '', list: [] })
   const [ManagementType, setManagementType] = useState({})
   const [loading, setLoading] = useState(true)
   const location = useLocation()

   useEffect(() => {
      setLoading(true)
      setTimeout(() => {
         if (location.pathname.includes("posts")) {
            setPosts({ Component: PostManagementItem, list: fakeData.Posts.posts })
         }
         if (location.pathname.includes("series")) {
            setPosts({ Component: SeriesManagementItem, list: fakeData.Posts.seriesList })
         }
         if (location.pathname.includes("violations")) {
            setPosts({ Component: ViolationItem, list: fakeData.Violations.violations })
         }

         if (location.pathname.includes("bookmarks")) {
            setManagementType({ onDelete: () => { alert("Deleted bookmark") } })
         } else {
            setManagementType({ onDelete: () => { alert("Deleted") }, onEdit: () => { alert("Edit") } })
         }
         setLoading(false)

      }, 2000)

      return () => {
         setPosts({ Comp: "", data: [] })
         setLoading(true)
      }
   }, [location])

   return (
      <div className="grid grid-cols-12 gap-8">
         <div className="col-span-3">
            <PostManagementMenu />
         </div>
         <div className="col-span-9">
            <PostManagementFilter />
            <div className="mt-5">
               <PostContainer {...Posts} {...ManagementType} loading={loading} />
            </div>
         </div>
      </div>
   );
}

export default PostManagement;
