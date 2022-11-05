/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'

import styles from './CommentRoot.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Image from '~/components/Image'
import Button from '~/components/Button'
import { useMarkupHTML } from '~/hooks'

const cx = classNames.bind(styles)

function CommentRoot(props) {
    const { onCancel } = props
    const [commentValue, setCommentValue] = useState("")
    const [commentState, setCommentState] = useState("write")
    const [disabled, setDisabled] = useState(true)

    const changeCommentState = (state) => {
        setCommentState(state)
    }

    const autoGrow = (e) => {
        e.target.style.height = '5px';
        e.target.style.height = e.target.scrollHeight + 'px';
    };

    const handleChange = (e) => {
        setDisabled(!e.target.value)
        setCommentValue(e.target.value)
    }

    return (
        <div className="bg-white py-1 px-3 shadow rounded mb-4">
            <div className="border-b border-gray-300">
                <button className={cx('button', commentState === "write" ? "active" : "")} onClick={() => changeCommentState("write")}>Viết</button>
                <button className={cx('button', commentState === "preview" ? "active" : "")} onClick={() => changeCommentState("preview")}>Xem trước</button>
            </div>
            <div className="py-3">
                {
                    commentState === "write" ? (<div className="flex items-start">
                        <Link to="" className="inline-block mx-3">
                            <Image src="" className="w-10 h-10 rounded-full" />
                        </Link>
                        <div className="flex-1">
                            <textarea
                                value={commentValue}
                                onChange={e => handleChange(e)}
                                className={cx('comment-area') + " border border-gray-200 focus:border-sky-600"}
                                placeholder="Viết bình luận..."
                                onInput={(e) => autoGrow(e)}
                            ></textarea>
                        </div>
                    </div>) : commentValue ? <div dangerouslySetInnerHTML={useMarkupHTML(commentValue)}></div> : <div className="text-sm text-gray-400 px-1 py-2">Không có gì để xem trước</div>
                }
                <div className="mt-2 flex justify-end">
                    {onCancel && <Button outline className="text-sm px-5 py-2" onClick={onCancel} >Huỷ</Button>}
                    <Button primary disabled={disabled} className="text-sm px-5 py-2" >Bình luận</Button>
                </div>
            </div>
        </div >
    )
}

export default CommentRoot