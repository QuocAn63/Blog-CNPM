import React from 'react'
import config from '~/config'
import PostManagementMenuItem from './PostManagementMenuItem'
import styles from './PostManagementMenu.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function PostManagementMenu() {
  const showSubmenu = (e) => {
    let parent = e.target.closest(`.${cx("has_submenu")}`)
    parent.classList.toggle(cx("show"))

  }
  return (
    <ul className={cx('wrapper')}>
      {config.itemList.PostManagementMenu.map((parent, index) => (
        <li key={index} className={cx("has_submenu")}>
          <PostManagementMenuItem {...parent} parent={!!parent.children} className={cx("parent") + " block"} onClick={showSubmenu} />
          {parent.children &&
            <ul className={cx("submenu")}>
              {parent.children.map((child, index) => (
                <li key={index}>
                  <PostManagementMenuItem {...child} className="px-10 block" />
                </li>
              ))}
            </ul>
          }
        </li>
      ))
      }
    </ul>
  )
}

export default PostManagementMenu