import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCaretUp, faComment } from '@fortawesome/free-solid-svg-icons';
import { forwardRef, memo } from 'react';

const metaInformations = {
    bookmarks: {
        title: "Bookmarks",
        icon: faBookmark
    },
    comments: {
        title: "Bình luận",
        icon: faComment
    },
    points: {
        title: "Rating",
        icon: faCaretUp
    }
}

const Item = forwardRef(({ content, icon, onClick, className }, ref) => {

    return (
        <div className={"text-sm text-gray-500 "} ref={ref}>
            {icon && <FontAwesomeIcon icon={icon} />}
            <span className='ml-1'>{content}</span>
        </div>
    )
})

function MetaItem({ title, content, icon, className, onClick, ...passprops }) {
    icon = metaInformations[title].icon
    title = metaInformations[title].title

    return title !== undefined ? (
        <Tippy content={title} placement='bottom'>
            <Item content={content} icon={icon} onClick={onClick} className={className} />
        </Tippy>
    ) : <Item content={content} icon={icon} onClick={onClick} className={className} />
}

MetaItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    className: PropTypes.string,
    onClick: PropTypes.string
}


export default memo(MetaItem)