import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import FormInput from '../FormInput'

function Searchbar({ value, onChange, register }) {
    return (
        <div className="flex items-center border border-gray-300 bg-white rounded w-full">
            <FormInput
                name="title"
                register={register}
                placeholder="Tìm kiếm"
                value={value}
                onChange={onChange}
            />
            <button>
                <FontAwesomeIcon icon={faSearch} className="px-3 text-gray-500 cursor-pointer" />
            </button>
        </div>
    )
}

export default Searchbar