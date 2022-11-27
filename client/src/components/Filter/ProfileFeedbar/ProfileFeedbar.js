import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './ProfileFeedBar.module.scss'
import classNames from 'classnames/bind'
import config from '~/config'

const cx = classNames.bind(styles)

function ProfileFeedbar() {
    const location = useLocation()

    return (
        <div className="border-t border-gray-300 ">
            <div className="flex">
                {config.itemList.ProfileNavList.map((item, index) => (
                    <NavLink to={`${location.pathname}/${item.path}`} key={index} className={(nav) =>
                        nav.isActive
                            ? cx('link', 'active') + ' text-sm block px-3 py-2 uppercase text-sky-700 font-bold'
                            : cx('link') + ' text-sm text-gray-500 block px-3 py-2 uppercase'
                    } >{item.name}</NavLink>
                ))}
            </div>
        </div>
    )
}

export default ProfileFeedbar