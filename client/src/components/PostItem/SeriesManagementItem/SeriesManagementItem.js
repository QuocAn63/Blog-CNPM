import { faAngleDown, faEarthAmerica, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MetaItem from '~/components/MetaItem';
import { Wrapper } from '~/components/Popper';
import Popup from '~/components/Popup';
import { TagContainer } from '~/components/Tag';

const statusLogo = {
    draft: <FontAwesomeIcon icon={faLock} className="text-green-400" />,
    public: <FontAwesomeIcon icon={faEarthAmerica} className="text-sky-400" />,
};

function SeriesManagementItem({ title, tags, slug, status, updated_at, points, bookmarks, comments, posts_count, onDelete, onEdit }) {
    const [ShowPopup, setShowPopup] = useState(false)

    return (
        <div className="bg-white rounded shadow border border-gray-300 mt-2 p-3">
            <div>
                {statusLogo[status]}
                <span className="ml-1 font-medium">{title}</span>
                <span>
                    {tags.length > 0 && <TagContainer tags={tags} className="my-2" />}
                </span>
            </div>
            <div className="mt-2">
                <div className="inline-flex items-center gap-3 mr-3">
                    <MetaItem title="points" content={points} />
                    <MetaItem title="bookmarks" content={bookmarks} />
                    <MetaItem title="comments" content={comments} />
                    <MetaItem title="postsSeries" content={posts_count} />
                </div>
                <span className="text-gray-400 text-sm">Sửa lần cuối: {updated_at}</span>
                {
                    (onEdit || onDelete) && (<Tippy
                        trigger="click"
                        hideOnClick={true}
                        interactive
                        placement="bottom"
                        animation={false}
                        render={() => (
                            <Wrapper>
                                <ul className="min-w-[80px]">
                                    {
                                        onEdit && <li>
                                            <Link
                                                className="block px-3 py-1 text-sm cursor-pointer hover:bg-sky-100 hover:text-sky-600"
                                                to={`/edit/post/${slug}`}
                                            >
                                                Sửa
                                            </Link>
                                        </li>
                                    }
                                    {onDelete && <li>
                                        <span className="block px-3 py-1 text-sm cursor-pointer hover:bg-sky-100 hover:text-sky-600" onClick={onDelete}>
                                            Xóa
                                        </span>
                                    </li>}
                                </ul>
                            </Wrapper>
                        )}
                    >
                        <FontAwesomeIcon icon={faAngleDown} className="ml-3 text-gray-300 cursor-pointer" />
                    </Tippy>)
                }
            </div>
            <Popup
                trigger={ShowPopup}
                setTrigger={setShowPopup}
                onConfirm={() => { alert("Deleted") }}
                confirmLabel="Đồng ý"
                label="Xoá bài viết"
                content="Xoá bài viết này?"
            >
            </Popup>
        </div>
    );
}

export default SeriesManagementItem;
