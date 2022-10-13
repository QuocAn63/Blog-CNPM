import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './Notify.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Notify({ data }) {
    return (
        <Link to={'/notify' + data.ID} className={cx('block p-2 hover:bg-slate-50 ' + cx('wrapper'))}>
            <div className='font-bold text-sm leading-4 line-clamp-2'>{data.TITLE}</div>
            <div className='text-xs leading-4'>{data.TIME}</div>
            <div className='mt-[6px] text-base leading-5 mb-2 line-clamp-2'>{data.DESCRIPTION}</div>
        </Link>
    )
}

Notify.propTypes = { data: PropTypes.object.isRequired }

export default Notify