import { faAngleDown, faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import Button from '~/components/Button'
import { DatePickerFromTo } from '~/components/Form'
import MenuForm from '~/components/Form/MenuForm'

const actionsItem = [{
    title: "Tất cả hoạt động",
    onClick: () => { alert("Clicked") }
}, {
    title: "Bookmark",
    onClick: () => { alert("Clicked") }
}, {
    title: "Upvote",
    onClick: () => { alert("Clicked") }
},
{
    title: "Downvote",
    onClick: () => { alert("Clicked") }
},
{
    title: "Xoá",
    onClick: () => { alert("Clicked") }
},
{
    title: "Huỷ Upvote",
    onClick: () => { alert("Clicked") }
},
{
    title: "Huỷ Downvote",
    onClick: () => { alert("Clicked") }
}]

const typesItem = [{
    title: "Tất cả các loại",
    onClick: () => { alert("Clicked") }
}, {
    title: "Bài viết",
    onClick: () => { alert("Clicked") }
}, {
    title: "Series",
    onClick: () => { alert("Clicked") }
},
{
    title: "Thẻ",
    onClick: () => { alert("Clicked") }
},
{
    title: "Bình luận",
    onClick: () => { alert("Clicked") }
},
{
    title: "Người dùng",
    onClick: () => { alert("Clicked") }
}]

function MeActivities() {
    const { register } = useForm()

    return (
        <div>
            <div className="flex items-center gap-5">
                <DatePickerFromTo register={register} />
                <div className="flex-1">
                    <MenuForm items={actionsItem} register={register} name="action" rightIcon={faAngleDown} />
                </div>
                <div className="flex-1">
                    <MenuForm items={typesItem} register={register} name="type" rightIcon={faAngleDown} />
                </div>
            </div>
            <div className="mt-5">
                <table className="border-collapse w-full" >
                    <thead>
                        <tr>
                            <th className="text-sm text-gray-500 py-3">
                                <div className="px-2">Ngày</div>
                            </th>
                            <th className="text-sm text-gray-500 py-3">
                                <div className="px-2">Hoạt động</div>
                            </th>
                            <th className="text-sm text-gray-500 py-3">
                                <div className="px-2">Kiểu</div>
                            </th>
                            <th className="text-sm text-gray-500 py-3">
                                <div className="px-2">Tiêu đề</div>
                            </th>
                            <th className="text-sm text-gray-500 py-3">
                                <div className="px-2">Hành động</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-y border-gray-200">
                            <td className="py-3">
                                <div className="text-sm px-2 text-center">
                                    khoảng 14 giờ trước
                                </div>
                            </td>
                            <td className="py-3">
                                <div className="text-sm px-2 text-center">
                                    Bookmark
                                </div>
                            </td>
                            <td className="py-3">
                                <div className="text-sm px-2 text-center">
                                    Bài viết
                                </div>
                            </td>
                            <td className="py-3">
                                <div className="text-sm px-2 line-clamp-1">
                                    Blog#51: Design Patterns: Strategy Pattern trong TypeScript 😊 (Series: Bón hành TypeScript - PHẦN 1)
                                </div>
                            </td>
                            <td className="py-3">
                                <div className="text-sm px-2 text-center">
                                    <Button small href="/post/as" outline className="text-gray-400 border border-gray-300 px-2 min-w-0 text-sm">
                                        <FontAwesomeIcon icon={faExternalLink} />
                                    </Button>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-y border-gray-200">
                            <td className="py-3">
                                <div className="text-sm px-2 text-center">
                                    khoảng 14 giờ trước
                                </div>
                            </td>
                            <td className="py-3">
                                <div className="text-sm px-2 text-center">
                                    Bookmark
                                </div>
                            </td>
                            <td className="py-3">
                                <div className="text-sm px-2 text-center">
                                    Bài viết
                                </div>
                            </td>
                            <td className="py-3">
                                <div className="text-sm px-2 line-clamp-1">
                                    Blog#51: Design Patterns: Strategy Pattern trong TypeScript 😊 (Series: Bón hành TypeScript - PHẦN 1)
                                </div>
                            </td>
                            <td className="py-3">
                                <div className="text-sm px-2 text-center">
                                    <Button small href="/post/as" outline className="text-gray-400 border border-gray-300 px-2 min-w-0 text-sm">
                                        <FontAwesomeIcon icon={faExternalLink} />
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MeActivities