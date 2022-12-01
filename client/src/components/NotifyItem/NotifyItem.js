import React from 'react'
import { Link } from 'react-router-dom'
import Image from "~/components/Image"
import { useMarkupHTML } from '~/hooks'
import styles from './NotifyItem.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function NotifyItem({ ...props }) {
    const { sender, data, created_at, is_read } = props
    const htmlContent = useMarkupHTML(data.content)

    const className = cx("wrapper", is_read && "not_seen") + " flex items-center border-t border-gray-200"

    return (
        <div className={className}>
            <Link to={`/user/${sender.username}`} className="px-3">
                <Image src={sender.avatar} className="block w-10 h-10 rounded-full object-cover" />
            </Link>
            <Link to={data.url} className="block flex-1 cursor-pointer hover:text-sky-500 py-3">
                <p className="text-sm" dangerouslySetInnerHTML={htmlContent}>
                </p>
                <div className="text-sm">{created_at}</div>
            </Link>
        </div>
    )
}

export default NotifyItem