import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react'
import React, { useEffect, useState } from 'react'
import { Wrapper } from '~/components/Popper'
import FormInput from '../FormInput'

function MenuForm({ rightIcon, register, name, items = [], defaultIndex = 0 }) {
    const [visible, setVisible] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(defaultIndex)
    const [inputValue, setInputValue] = useState(items[defaultIndex].title || "")

    const show = () => setVisible(true)
    const hide = () => setVisible(false)

    useEffect(() => {
        setInputValue(items[currentIndex].title)
    }, [currentIndex, items])

    const render = () => {
        const onClick = (onClick, index) => {
            setCurrentIndex(index)
            onClick()
            hide()
        }

        const defaultCheck = (checked) => {
            const classCheck = checked ? " font-bold text-sky-600" : ""

            return "text-sm px-5 py-2 cursor-pointer " + classCheck
        }

        return <Wrapper>
            <ul>
                {items.map((item, index) => <li key={index}>
                    <div className={defaultCheck(currentIndex === index)} onClick={() => onClick(item.onClick, index)}>{item.title}</div>
                </li>)}
            </ul>
        </Wrapper>
    }

    return (
        <Tippy
            visible={visible}
            render={render}
            interactive
            onClickOutside={hide}
            animation={false}
            placement="bottom"
        >
            <div className="relative bg-white">
                <label className="cursor-pointer">
                    <div className="border border-gray-300 rounded">
                        <FormInput register={register} name={name} onClick={visible ? hide : show} value={inputValue} readOnly className="h-10 outline-0 w-full cursor-pointer" />
                    </div>
                    {rightIcon && <FontAwesomeIcon icon={rightIcon} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />}
                </label>
            </div>

        </Tippy>
    )
}

export default MenuForm