import PropTypes from 'prop-types';
import StickyBox from 'react-sticky-box';
import StickySidebarContainer from './StickySidebarContainer';

import FakeData from '~/FakeData';

function StickySidebar({ render, offsetTop, offsetBottom }) {

   return <div className="h-full">
      <StickyBox offsetTop={offsetTop} offsetBottom={offsetBottom}>
         {render()}
      </StickyBox>
   </div>
}

export default StickySidebar;
