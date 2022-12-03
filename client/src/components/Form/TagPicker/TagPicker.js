import Tippy from '@tippyjs/react'
import React, { useState } from 'react'
import { Wrapper } from '~/components/Popper'
import FormInput from '../FormInput'

function TagPicker({ register, value, onChange }) {
    const [ShowTagSearchMenu, setShowTagSearchMenu] = useState(false)

    const handleChangeTagSearch = (e) => {
        if (typeof e === 'string') {
            onChange(e);
            setShowTagSearchMenu(false);
        } else {
            onChange(e.target.value);
        }
    }

    return (
        <Tippy
            visible={ShowTagSearchMenu}
            interactive
            placement="bottom-end"
            animation={false}
            render={() => (
                <Wrapper className="min-w-[200px]">
                    <ul>
                        <li
                            className="block px-5 py-2 text-sm cursor-pointer"
                            onClick={() => handleChangeTagSearch('Javascript')}
                        >
                            <span>Javascript</span>
                        </li>
                        <li
                            className="block px-5 py-2 text-sm cursor-pointer"
                            onClick={() => handleChangeTagSearch('Javascript')}
                        >
                            <span>Javascript</span>
                        </li>
                        <li
                            className="block px-5 py-2 text-sm cursor-pointer"
                            onClick={() => handleChangeTagSearch('Javascript')}
                        >
                            <span>Javascript</span>
                        </li>
                        <li
                            className="block px-5 py-2 text-sm cursor-pointer"
                            onClick={() => handleChangeTagSearch('Javascript')}
                        >
                            <span>Javascript</span>
                        </li>
                    </ul>
                </Wrapper>
            )}
        >
            <div className="border border-gray-300 rounded px-3 flex-1 bg-white">
                <FormInput
                    placeholder="Thẻ"
                    name="tag"
                    register={register}
                    value={value}
                    onChange={handleChangeTagSearch}
                    onClick={() => setShowTagSearchMenu(true)}
                />
            </div>
        </Tippy>
    )
}

export default TagPicker