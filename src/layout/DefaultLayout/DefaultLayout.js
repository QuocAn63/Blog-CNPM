import Header from '~/layout/partials/Header';
import Footer from '~/layout/partials/Footer';

function DefaultLayout({ children }) {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   );
}

export default DefaultLayout;
