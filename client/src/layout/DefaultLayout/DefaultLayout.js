import Header from '~/layout/partials/Header';
import Footer from '~/layout/partials/Footer';

function DefaultLayout({ children }) {
   return (
      <>
         <Header />
         <div className="mt-16">
            {children}
         </div>
         <Footer />
      </>
   );
}

export default DefaultLayout;
