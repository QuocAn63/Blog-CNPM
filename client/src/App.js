import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from '~/layout/DefaultLayout';
import { publicRoutes } from '~/routes';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            {publicRoutes.map((route, index) => {
               const Layout = route.layout === null ? "div" : route.layout || DefaultLayout;
               const Page = route.component;

               return (
                  <Route
                     key={index}
                     path={route.path}
                     exact={route.exact}
                     element={
                        <Layout feedbar={route.feedbar} sidebar={route.Sidebar}>
                           <Page />
                        </Layout>
                     }
                  >
                     {route.subPath &&
                        route.subPath.map((item, index) => {
                           const SubPage = item.component;
                           return <Route key={index} index={item.index} path={item.path} element={<SubPage />} />;
                        })}
                  </Route>
               );
            })}
         </Routes>
      </BrowserRouter>
   );
}

export default App;
