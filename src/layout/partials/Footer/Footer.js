import { faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="mt-52 bg-sky-800 pt-5 pb-10">
      <div className="max-w-screen-xl m-auto">
        <div className="grid grid-cols-2">
          <div className="text-white">
            <p className="font-bold uppercase pb-4">Tài nguyên</p>
            <ul className="flex w-full flex-wrap">
              <li className="basis-1/2 mb-4">
                <Link to="/posts" className="block text-white">Bài viết</Link>
              </li>
              <li className="basis-1/2 mb-4">
                <Link to="/questions" className="block text-white">Câu hỏi</Link>
              </li>
              <li className="basis-1/2 mb-4">
                <Link to="/discussions" className="block text-white">Thảo luận</Link>
              </li>
              <li className="basis-1/2 mb-4">
                <Link to="/tags" className="block text-white">Tags</Link>
              </li>
              <li className="basis-1/2 mb-4">
                <Link to="/authors" className="block text-white">Tác giả</Link>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <p className="font-bold uppercase pb-4">Liên kết</p>
            <ul className="flex w-full flex-wrap gap-8">
              <li>
                <a href="https://www.facebook.com/quocan.6302" target="_blank" className="block text-white text-lg" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="https://github.com/QuocAn63" target="_blank" className="block text-white text-lg" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer