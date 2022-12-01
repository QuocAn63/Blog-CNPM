import React from 'react';
import Footer from '../partials/Footer';
import Header from '../partials/Header';

function DefaultSidebarless({ children }) {
   return (
      <div className="flex flex-col min-h-screen">
         <Header />
         <div className="mt-32 flex-1">
            <div className="max-w-screen-sm xl:max-w-screen-xl m-auto min-h[]">{children}</div>
         </div>
         <Footer />
      </div>
   );
}

export default DefaultSidebarless;
