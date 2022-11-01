import Header from '~/layout/partials/Header';
import Footer from '~/layout/partials/Footer';

function DefaultLayout({ children }) {
   return (
      <>
         <Header />
         <div className="mt-32">
            <div className="max-w-screen-sm xl:max-w-screen-xl m-auto">
               {children}
            </div>
         </div>
         <Footer />
      </>
   );
}

export default DefaultLayout;
