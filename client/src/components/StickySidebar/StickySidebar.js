import PropTypes from 'prop-types';
import StickyBox from 'react-sticky-box';
import StickySidebarContainer from './StickySidebarContainer';

import FakeData from '~/FakeData';

// function StickySidebar() {
//    return (
//       <div className="h-full">
//          <StickyBox offsetTop={84}>
//             <div className=" p-2 max-h-[calc(100vh_-_94px)] overflow-y-hidden hover:overflow-y-scroll">
//                <StickySidebarContainer title="Bài viết mới nhất" data={FakeData.Sidebar.Posts} />
//                <StickySidebarContainer title="Tác giả nổi bậc" data={FakeData.Sidebar.Authors} />
//             </div>
//          </StickyBox>
//       </div>
//    );
// }

function StickySidebar({ render, offsetTop, offsetBottom }) {

   return <div className="h-full">
      <StickyBox offsetTop={offsetTop} offsetBottom={offsetBottom}>
         {render()}
      </StickyBox>
   </div>
}

export default StickySidebar;
