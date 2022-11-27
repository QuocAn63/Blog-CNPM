import React from 'react';
import Header from '../partials/Header';

function FullScreen({ children }) {
   return (
      <>
         <Header />
         <div className="mt-32">
            <div className="max-w-screen-2xl m-auto">{children}</div>
         </div>
      </>
   );
}

export default FullScreen;
