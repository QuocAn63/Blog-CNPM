import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import React, { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { Wrapper } from '~/components/Popper';

function PostManagementFilter() {
    const [TagSearchValue, setTagSearchValue] = useState("")
    const [ShowTagSearchMenu, setShowTagSearchMenu] = useState(false)

    const handleChangeTagSearch = (e) => {
        if (typeof e === "string") {
            setTagSearchValue(e)
            setShowTagSearchMenu(false)
        } else {
            setTagSearchValue(e.target.value)
        }
    }

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            <div className="inline-block border border-gray-300 bg-white rounded focus-within:border-sky-600 max-w-full">
                <label className="inline-block px-3 text-sm">
                    <span className="mr-2 text-gray-500">Từ</span>
                    <input type="date" className="h-10 focus:outline-0 text-gray-500" />
                </label>
                <span>
                    -
                </span>
                <label className="inline-block px-3 text-sm" >
                    <span className="mr-2 text-gray-500">Đến</span>
                    <input type="date" className="h-10 focus:outline-0 text-gray-500" />
                </label>
            </div>
            <Tippy
                visible={ShowTagSearchMenu}
                interactive
                placement="bottom-end"
                animation={false}
                render={() =>
                    <Wrapper className="min-w-[200px]">
                        <ul>
                            <li className="block px-5 py-2 text-sm cursor-pointer" onClick={() => handleChangeTagSearch("Javascript")}>
                                <span>Javascript</span>
                            </li>
                            <li className="block px-5 py-2 text-sm cursor-pointer" onClick={() => handleChangeTagSearch("Javascript")}>
                                <span>Javascript</span>
                            </li>
                            <li className="block px-5 py-2 text-sm cursor-pointer" onClick={() => handleChangeTagSearch("Javascript")}>
                                <span>Javascript</span>
                            </li>
                            <li className="block px-5 py-2 text-sm cursor-pointer" onClick={() => handleChangeTagSearch("Javascript")}>
                                <span>Javascript</span>
                            </li>
                        </ul>
                    </Wrapper>
                }
            >
                <div className="border border-gray-300 rounded px-3 flex-grow-1 bg-white">
                    <input className="focus:outline-0 text-sm h-10 w-full inline-block" placeholder="Thẻ" value={TagSearchValue} onChange={handleChangeTagSearch} onClick={() => setShowTagSearchMenu(true)} />
                </div>
            </Tippy>
            <div className="flex-grow-1">
                <div className="flex items-center border border-gray-300 rounded w-full">
                    <input className="px-5 h-[42px] outline-0 border-0 flex-1 rounded" />
                    <FontAwesomeIcon icon={faSearch} className="px-3 text-gray-500" />
                </div>
            </div>
        </div>
    )
}

export default PostManagementFilter