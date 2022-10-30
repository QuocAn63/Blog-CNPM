import FakeData from '~/FakeData';
import StickySidebar from '../StickySidebar';
import StickySidebarContainer from '../StickySidebarContainer';

function GlobalStickySidebar() {
   return (
      <StickySidebar
         render={() => (
            <div className=" p-2 max-h-[calc(100vh_-_94px)] overflow-y-hidden hover:overflow-y-scroll">
               <StickySidebarContainer title="Bài viết mới nhất" data={FakeData.Sidebar.Posts} />
               <StickySidebarContainer title="Tác giả nổi bậc" data={FakeData.Sidebar.Authors} />
            </div>
         )}
      />
   );
}

export default GlobalStickySidebar;
