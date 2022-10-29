import React from 'react'
import styles from './QuestionItem.module.scss'
import classNames from 'classnames/bind';
import MetaItem from '~/components/MetaItem';
import { Link } from 'react-router-dom';
import Tag from '~/components/Tag';

const cx = classNames.bind(styles);

function QuestionItem(props) {
  const { title, slug, points, user, tags, reply_count, comments_count, publishedAt, isSolved } = props;

  return (
    <div className={cx('wrapper') + ' px-2 py-4'}>
      <div className="flex items-center gap-10">
        <div>
          <div>
            <MetaItem title="publishedAt" content="10 tháng 2 năm 2022" />
          </div>
          <div className="flex items-center gap-5 mt-1">
            <MetaItem title="reply" content="0" />
            <MetaItem title="points" content="0" />
            <MetaItem title="comments" content="0" />
          </div>
        </div>
        <div className="flex-1">
          <div>
            <Link className="text-sky-600 hover:underline text-sm hover:text-sky-800">{user.data.fullname}</Link>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <Link to={slug} className="block text-lg font-medium shrink-0 hover:text-sky-600">
              {isSolved && <span className="text-green-800 font-bold">[SOLVED]</span>} {title}
            </Link>
            <div className="flex items-center gap-2">
              {tags.map((tag, index) => (
                <Tag title={tag.title} slug={tag.slug} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionItem