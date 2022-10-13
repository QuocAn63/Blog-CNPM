import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import Image from '~/components/Image';

const PostItem = ({ data }) => (
   <Link to={'/post/' + data.POST_ID} className="hover:bg-slate-50 block py-2 pt-2 pl-4 border-b border-slate-300">
      <div className="line-clamp-2 font-bold leading-3">{data.TITLE}</div>
      <div className="text-sm">
         <span className="flex items-center w-full text-sky-700">{data.AUTHOR} </span>
         <span>
            đã đăng vào
            <span> {data.PUBLISHED_AT}</span>
         </span>
      </div>
      <div className="line-clamp-4">{data.SUGGEST}</div>
   </Link>
);

const AuthorItem = ({ data }) => (
   <Link
      to={'/user/' + data.ID}
      className="hover:bg-slate-50 flex w-full items-center py-2 pt-2 pl-4 border-b border-slate-300"
   >
      <Image className="w-12 h-12 rounded-full mr-3" src={data.IMAGE} />
      <div>
         <div className="line-clamp-2 font-bold leading-3">{data.TITLE}</div>
         <div className="text-sm">
            Số bài viết:
            <span> {data.POSTS_COUNT}</span>
         </div>
      </div>
   </Link>
);

const TagItem = ({ data }) => (
   <Link to={'/tag/' + data.ID} className="hover:bg-slate-50 block py-2 pt-2 pl-4 border-b border-slate-300">
      <div>
         <div className="line-clamp-2 font-bold leading-3">{data.TITLE}</div>
         <div className="text-sm">
            Số bài viết:
            <span> {data.POSTS_COUNT}</span>
         </div>
      </div>
   </Link>
);

function ResultItem({ data, type }) {
   let Comp;

   switch (type) {
      case 'POSTS':
         Comp = PostItem;
         break;
      case 'AUTHORS':
         Comp = AuthorItem;
         break;
      case 'TAGS':
         Comp = TagItem;
         break;
      default:
         return;
   }

   return <Comp data={data} />;
}

ResultItem.propTypes = {
   data: PropTypes.object.isRequired,
}

export default ResultItem;
