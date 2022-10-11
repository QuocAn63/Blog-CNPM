import { faCircleNotch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    // const debouncedValue = useDebounce(searchValue);
    const searchInputRef = useRef();

    const handleChangeSearchInput = (e) => {
        const inputValue = e.target.value;

        if (!inputValue.startsWith(' ')) {
            setSearchValue(inputValue);
        }
    };

    const handleSearch = () => {
        if (searchValue) {
            navigate({ pathname: 'search', search: `q=${searchValue}` }, { replace: true })
        }
    }
    return (
        <div className="h-16 flex items-center">
            <div className="relative flex items-center w-96 h-10 pl-5 border border-slate-400 rounded">
                <input
                    type="text"
                    placeholder="Tìm kiếm bài viết"
                    ref={searchInputRef}
                    value={searchValue}
                    onFocus={() => setShowResult(true)}
                    onChange={(e) => handleChangeSearchInput(e)}
                    className="flex-1 h-full outline-none border-none text-base text-slate-500 pr-20 bg-transparent"
                />
                <div className="absolute flex items-center align-center top-1/2 right-14 -translate-y-1/2">
                    {loading && <FontAwesomeIcon icon={faCircleNotch} className="cursor-pointer text-gray-800 animate-spin" />}
                    {!loading && !!searchValue && <FontAwesomeIcon icon={faXmark} className="cursor-pointer text-gray-800" />}
                </div>
            </div>
        </div>
    )
}

export default Search