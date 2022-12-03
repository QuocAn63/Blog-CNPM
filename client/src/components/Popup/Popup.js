import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from '../Button'

function Popup({ label, content, children, trigger = false, setTrigger, onConfirm, confirmLabel }) {
    const handleConfirm = () => {
        onConfirm()
        setTrigger(false)
    }

    return trigger ? (<>
        <div div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black opacity-20" >
        </div >
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white min-w-[420px] min-h-[150px] rounded shadow border border-gray-300">
                <div className="flex items-center justify-between p-4">
                    <span className="text-lg">{label}</span>
                    <FontAwesomeIcon icon={faClose} className="text-gray-400 cursor-pointer" onClick={() => { setTrigger(false) }} />
                </div>
                <div className="text-sm px-4 pb-4">{content}</div>
                {children}
                <div className="px-4 text-right">
                    <Button onClick={() => setTrigger(false)} className="text-sm py-1">Huỷ</Button>
                    <Button onClick={handleConfirm} primary className="text-sm py-1">{confirmLabel}</Button>
                </div>
            </div>
        </div>
    </>) : ""

}

export default Popup