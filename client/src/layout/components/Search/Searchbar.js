import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import Button from '~/components/Button'



function Searchbar({ q }) {
    const [searchValue, setSearchValue] = useState(q || "")

    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className="flex items-center gap-5">
            <input className="border border-gray-300 rounded flex-1 outline-sky-600 h-[45px]" value={searchValue} onChange={handleSearchInputChange} />
            <Button primary leftIcon={faSearch} >Tìm kiếm</Button>
        </div>
    )
}

export default Searchbar