import React from 'react'
const statusClass = {
    expired: {
        text: "Hết hiệu lực",
        color: "text-green-600"
    },
    active: {
        text: "Còn hiệu lực",
        color: "text-red-600"
    },
}

const banTypeText = {
    comment: "Bình luận"
}

function ViolationItem({ reason, status, from, to, data }) {

    return (
        <div className="bg-white rounded shadow border border-gray-300 mt-2">
            <div className="flex text-sm px-3 py-1">
                <span className="basis-20">Tình trạng:</span>
                <span className={"font-semibold " + statusClass[status].color}>{statusClass[status].text}</span>
            </div>
            <div className="flex text-sm px-3 py-1">
                <span className="basis-20">Lý do:</span>
                <span className="font-semibold text-gray-600">{reason}</span>
            </div>
            <div className="flex text-sm px-3 py-1">
                <span className="basis-20">Thời hạn:</span>
                <span>
                    Từ <span className="font-semibold text-gray-600">{from}</span> đến <span className="font-semibold text-gray-600">{to}</span>
                </span>
            </div>
            <div className="flex text-sm px-3 py-1">
                <span className="basis-20">Loại:</span>
                <span className="font-semibold text-gray-600">
                    {banTypeText[data.table_type]}
                </span>
            </div>
            <div className="flex text-sm px-3 py-1">
                <span className="basis-20">Nội dung</span>
                <span className="font-semibold text-gray-600">
                    {data.content}
                </span>
            </div>
        </div>
    )
}

export default ViolationItem