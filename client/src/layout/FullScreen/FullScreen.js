import React from 'react';
import Footer from '../partials/Footer';
import Header from '../partials/Header';

function FullScreen({ children }) {
   return (
      <>
         <Header />
         <div className="mt-32">
            <div className="max-w-screen-xl m-auto">{children}</div>
         </div>
         <Footer />
      </>
   );
}

export default FullScreen;
