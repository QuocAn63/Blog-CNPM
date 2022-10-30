import PropTypes from 'prop-types'
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import Image from '~/components/Image'

function UserSidebar({ avatar, username, fullname, isFollowed }) {

    return (
        <div className="flex w-full gap-4">
            <Image
                src={avatar}
                className="block h-[60px] w-[60px] border border-gray-300 rounded-full object-cover"
            />
            <div>
                <p>
                    <Link
                        to={'/' + username}
                        className="text-sm text-sky-500 hover:text-sky-800 hover:underline"
                    >
                        {fullname}
                    </Link>
                </p>
                <p>
                    <span className="text-gray-600 text-sm">@{username}</span>
                </p>
                <p className="mt-2">
                    {isFollowed ? (
                        <Button primary leftIcon={faCheck} className="text-sm px-2 py-1">
                            Đã theo dõi
                        </Button>
                    ) : (
                        <Button outline leftIcon={faPlus} className="text-sm px-2 py-1">
                            Theo dõi
                        </Button>
                    )}
                </p>
            </div>
        </div>
    )
}

UserSidebar.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    isFollowed: PropTypes.bool
}

export default UserSidebar