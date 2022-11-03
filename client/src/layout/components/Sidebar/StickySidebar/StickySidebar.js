import StickyBox from 'react-sticky-box';

function StickySidebar({ render, offsetTop, offsetBottom }) {

   return <div className="h-full">
      <StickyBox offsetTop={offsetTop} offsetBottom={offsetBottom}>
         {render()}
      </StickyBox>
   </div>
}

export default StickySidebar;
