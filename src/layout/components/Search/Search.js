import { faCircleNotch, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';

function Search() {
   const [searchResult, setSearchResult] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [showResult, setShowResult] = useState(false);
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
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
         navigate({ pathname: 'search', search: `q=${searchValue}` }, { replace: true });
      }
   };
   return (
      <div className="h-16 flex items-center">
         <HeadlessTippy
            visible
            interactive
            offset={[0, 0]}
            render={(attrs) => (
               <div tabIndex="-1" className="bg-white rounded shadow overflow-auto w-96">
                  HeadlessTippy
               </div>
            )}
         >
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
                  {loading && (
                     <FontAwesomeIcon icon={faCircleNotch} className="cursor-pointer text-gray-500 animate-spin" />
                  )}
                  {!loading && !!searchValue && (
                     <FontAwesomeIcon icon={faXmark} className="cursor-pointer text-gray-500" />
                  )}
               </div>
               <button
                  type="button"
                  className="absolute w-10 h-10 top-1/2 -right-1 -translate-y-1/2 rounded-tr rounded-br border border-slate-400 outline-none text-white text-base bg-sky-800"
                  onClick={handleSearch}
               >
                  {<FontAwesomeIcon icon={faMagnifyingGlass} />}
               </button>
            </div>
         </HeadlessTippy>
      </div>
   );
}

export default Search;
