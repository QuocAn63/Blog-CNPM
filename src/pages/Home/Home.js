import React from 'react';
import Banner from '~/components/Banner/Banner';
import config from '~/config/index';
import { FeedBar } from '~/components/Filter';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

function Home() {
   return (
      <div>
         <Banner src="" alt="Banner" to="/" />
         <FeedBar list={config.itemList.ArticleNavList} path="/" icon={faPencil} title="Viết bài" />
      </div>
   );
}

export default Home;
