import { faEarthAmerica, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Button from '~/components/Button'

const statusDescription = {
    public: {
        description: "Nếu được phê duyệt, mọi người đều có thể thấy bài viết của bạn",
        icon: faEarthAmerica
    },
    private: {
        description: "Chỉ có bạn mới có thể xem bài viết này. Bản nháp của bạn đã được lưu tự động khi bạn nhập",
        icon: faLock
    }
}

function PublishMenu() {
    const [status, setStatus] = useState("public")
    const onStatusChange = (status) => {
        setStatus(status)
    }

    return (
        <div className="p-3 w-[350px]">
            <p className="text-base">Xuất bản bài viết</p>
            <div className="mt-2">
                <p className="text-sm">Hiển thị:</p>
                <div className="mt-2">
                    <label className={status === "public" ? " mt-2 block text-sky-600" : "mt-2 block"}>
                        <input type="radio" value={status} name="status" className="mr-2" onChange={() => onStatusChange("public")} checked={status === "public"} />
                        <span className="text-sm">Công khai (Cần phê duyệt)</span>
                    </label>
                    <label className={status === "private" ? " mt-2 block text-sky-600" : "mt-2 block"}>
                        <input type="radio" value={status} name="status" className="mr-2" onChange={() => onStatusChange("private")} checked={status === "private"} />
                        <span className="text-sm">Chỉ mình tôi</span>
                    </label>
                </div>
                <div className="my-4 bg-gray-200 w-full h-[1px]"></div>
                <div className="text-gray-600">
                    <p className="text-xs"><span className="mr-1"><FontAwesomeIcon icon={statusDescription[status].icon} /></span>{statusDescription[status].description}</p>
                </div>
                <div className="mt-4">
                    <Button small outline className="text-sm font-normal hover:text-white hover:bg-sky-600" type="button">Lưu</Button>
                </div>
            </div>
        </div>
    )
}

export default PublishMenu