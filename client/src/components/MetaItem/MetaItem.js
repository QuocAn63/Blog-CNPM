import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCalendar, faCaretDown, faCaretUp, faComment, faPen, faReply, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { forwardRef, memo } from 'react';

const metaInformations = {
   bookmarks: {
      title: 'Bookmarks',
      icon: faBookmark,
   },
   comments: {
      title: 'Bình luận',
      icon: faComment,
   },
   points: {
      title: 'Rating',
      icon: faCaretUp,
   },
   reply: {
      title: 'Câu trả lời',
      icon: faReply,
   },
   followers: {
      title: 'Người theo dõi',
      icon: faUserPlus,
   },
   posts: {
      title: 'Bài viết',
      icon: faPen,
   },
   publishedAt: {
      title: 'Thời gian xuất bản',
      icon: faCalendar,
   },
   upvote: {
      title: "Upvote",
      icon: faCaretUp
   },
   downvote: {
      title: "Downvote",
      icon: faCaretDown
   }
};

const Item = forwardRef(({ content, icon, onClick, className }, ref) => {
   return (
      <div className={'inline-flex items-center text-gray-500 text-center ' + className} ref={ref} onClick={onClick}>
         {icon && <FontAwesomeIcon icon={icon} className="inline-block w-full" />}
         <span className="ml-1">{content}</span>
      </div>
   );
});

function MetaItem({ title, content, icon, className = "", onClick, base, large, ...passprops }) {
   icon = metaInformations[title].icon;
   title = metaInformations[title].title;

   if (base) {
      className += " text-base";
   } else if (large) {
      className += " text-lg"
   } else {
      className += " text-sm"
   }

   if (onClick) {
      className += " cursor-pointer"
   }

   return title !== undefined ? (
      <Tippy content={title} placement="bottom">
         <Item content={content} icon={icon} onClick={onClick} className={className} />
      </Tippy>
   ) : (
      <Item content={content} icon={icon} onClick={onClick} className={className} />
   );
}

MetaItem.propTypes = {
   title: PropTypes.string,
   content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   className: PropTypes.string,
   onClick: PropTypes.func,
};

export default memo(MetaItem);
