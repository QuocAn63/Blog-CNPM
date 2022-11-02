import React from 'react'
import { FeedBar } from '~/components/Filter'
import { GlobalStickySidebar } from '~/components/StickySidebar'
import Footer from '../partials/Footer'
import Header from '../partials/Header'

function DefaultLayout({ children, ...props }) {
   const { feedbar, Sidebar } = props

   return (
      <>
         <Header />
         <div className="mt-32">
            <div className="max-w-screen-sm xl:max-w-screen-xl m-auto">
               {feedbar && <FeedBar {...feedbar} />}
               <div className="mt-4">
                  <div className="max-w-screen-xl mx-auto">
                     <div className="grid grid-cols-12">
                        <div className="col-span-9 pr-5">
                           {children}
                        </div>
                        <div className="col-span-3">
                           {Sidebar ? <Sidebar offsetTop={64} /> : <GlobalStickySidebar offsetTop={64} />}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default DefaultLayout