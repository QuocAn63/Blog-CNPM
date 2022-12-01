import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faBookmark,
   faCalendar,
   faCaretDown,
   faCaretUp,
   faComment,
   faFlag,
   faPen,
   faQuestion,
   faReply,
   faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { forwardRef, memo } from 'react';
import { faPaste } from '@fortawesome/free-regular-svg-icons';

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
   questions: {
      title: 'Câu hỏi',
      icon: faQuestion,
   },
   publishedAt: {
      title: 'Thời gian xuất bản',
      icon: faCalendar,
   },
   upvote: {
      title: 'Upvote',
      icon: faCaretUp,
   },
   downvote: {
      title: 'Downvote',
      icon: faCaretDown,
   },
   report: {
      title: 'Báo cáo',
      icon: faFlag,
   },
   postsSeries: {
      title: "Số bài viết",
      icon: faPaste
   }
};

const Item = forwardRef(({ content, icon, onClick, className }, ref) => {
   return (
      <div className={'inline-block text-gray-500 text-center ' + className} ref={ref} onClick={onClick}>
         {icon && <FontAwesomeIcon icon={icon} />}
         {content !== undefined ? <span className="ml-1">{content}</span> : ''}
      </div>
   );
});

function MetaItem({ title, content, icon, className = '', onClick, base, large, placement = 'bottom', ...passprop }) {
   icon = metaInformations[title].icon;
   title = metaInformations[title].title;

   if (base) {
      className += ' text-base';
   } else if (large) {
      className += ' text-lg';
   } else {
      className += ' text-sm';
   }

   if (onClick) {
      className += ' cursor-pointer';
   }
   const passprops = { content, icon, onClick, className };

   return title !== undefined ? (
      <Tippy content={title} placement={placement}>
         <Item {...passprops} />
      </Tippy>
   ) : (
      <Item {...passprops} />
   );
}

MetaItem.propTypes = {
   title: PropTypes.string,
   content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   className: PropTypes.string,
   onClick: PropTypes.func,
};

export default memo(MetaItem);
