import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react'
import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from '~/components/Popper'
import config from '~/config'


function SearchFeedbar({ q, type, sort, ...props }) {
  const [sortTable, setSortTable] = useState(config.itemList.searchFilterList)
  const getClassName = (passType, inputType, className, active, defaultActive) => {
    return ((!passType && inputType === defaultActive) || type === inputType) ? `${className} ${active}` : className
  }

  return (
    <div className="border-t border-b border-gray-300 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {config.itemList.SearchNavList.map((item, index) => (
            <Link to={`/search?q=${q}&type=${item.type}`} key={index} className={getClassName(type, item.type, "text-sm block px-3 py-2 uppercase font-bold", "text-sky-700", "post")}>{item.name}</Link>
          ))}
        </div>
        {
          type === "post" && <Tippy
            interactive
            trigger="click"
            animation={false}
            placement='bottom-end'
            render={() =>
              <Wrapper >
                {config.itemList.searchFilterList.map((item, index) => <div key={index} className={getClassName(sort, item.sort, "px-5 py-2 cursor-pointer hover:text-sky-700", "text-sky-700", "score")}>{item.title}</div>)}
              </Wrapper>
            }
          >
            <div className="text-sm cursor-pointer">
              <span className="mr-1">Sắp xếp theo:</span>
              <span>
                <b className="text-sky-700">{sortTable[0].title}</b>
                <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
              </span>
            </div>
          </Tippy>
        }
      </div>
    </div>
  )
}

export default memo(SearchFeedbar)