import { faCircleNotch, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';

import ResultItem from './ResultItem';

const searchResultArray = [
   {
      TITLE: 'Bài viết',
      TYPE: 'POSTS',
      DATA: [
         {
            ID: '1',
            AUTHOR: 'Cao Quoc An',
            PUBLISHED_AT: '2022-03-06 10:05',
            TITLE: 'NodeJs Với Express FrameWork',
            SUGGEST:
               'Chắc hẳn trong thực tế khi làm các dự án việc phát sinh tính năng tải ảnh là rất nhiều. Ví dụ như việc đơn giản là tải 01 ảnh chúng ta có thể làm như thế này. Như đoạn code dưới quá là đơn giản đúng không, ngay trong thẻ <a> chúng ta thể thuộc tính "download" sẽ được tải xuống khi người dùng nhấp vào liên kết.',
         },
         {
            ID: '2',
            AUTHOR: 'Cao Quoc An',
            PUBLISHED_AT: '2022-03-06 10:05',
            TITLE: 'NodeJs Với Express FrameWork',
            SUGGEST:
               'Chắc hẳn trong thực tế khi làm các dự án việc phát sinh tính năng tải ảnh là rất nhiều. Ví dụ như việc đơn giản là tải 01 ảnh chúng ta có thể làm như thế này. Như đoạn code dưới quá là đơn giản đúng không, ngay trong thẻ <a> chúng ta thể thuộc tính "download" sẽ được tải xuống khi người dùng nhấp vào liên kết.',
         },
         {
            ID: '3',
            AUTHOR: 'Cao Quoc An',
            PUBLISHED_AT: '2022-03-06 10:05',
            TITLE: 'NodeJs Với Express FrameWork',
            SUGGEST:
               'Chắc hẳn trong thực tế khi làm các dự án việc phát sinh tính năng tải ảnh là rất nhiều. Ví dụ như việc đơn giản là tải 01 ảnh chúng ta có thể làm như thế này. Như đoạn code dưới quá là đơn giản đúng không, ngay trong thẻ <a> chúng ta thể thuộc tính "download" sẽ được tải xuống khi người dùng nhấp vào liên kết.',
         },
         {
            ID: '4',
            AUTHOR: 'Cao Quoc An',
            PUBLISHED_AT: '2022-03-06 10:05',
            TITLE: 'NodeJs Với Express FrameWork',
            SUGGEST:
               'Chắc hẳn trong thực tế khi làm các dự án việc phát sinh tính năng tải ảnh là rất nhiều. Ví dụ như việc đơn giản là tải 01 ảnh chúng ta có thể làm như thế này. Như đoạn code dưới quá là đơn giản đúng không, ngay trong thẻ <a> chúng ta thể thuộc tính "download" sẽ được tải xuống khi người dùng nhấp vào liên kết.',
         },
      ],
   },
   {
      TITLE: 'Tác giả',
      TYPE: 'AUTHORS',
      DATA: [
         {
            ID: '1',
            TITLE: 'Cao Quoc An',
            IMAGE: '',
            POSTS_COUNT: 20,
         },
         {
            ID: '2',
            TITLE: 'Cao Quoc An',
            IMAGE: '',
            POSTS: 20,
         },
         {
            ID: '3',
            TITLE: 'Cao Quoc An',
            IMAGE: '',
            POSTS: 20,
         },
      ],
   },
   {
      TITLE: 'Thẻ',
      TYPE: 'TAGS',
      DATA: [
         {
            ID: '1',
            TITLE: 'Javascript',
            POSTS_COUNT: 31,
         },
         {
            ID: '2',
            TITLE: 'Javascript',
            POSTS_COUNT: 31,
         },
         {
            ID: '3',
            TITLE: 'Javascript',
            POSTS_COUNT: 31,
         },
      ],
   },
];

function Search() {
   const [searchResult, setSearchResult] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [showResult, setShowResult] = useState(false);
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   // const debouncedValue = useDebounce(searchValue);
   const searchInputRef = useRef();

   useEffect(() => {
      setLoading(true);
      setTimeout(() => {
         setSearchResult(searchResultArray);
         setLoading(false);
      }, 2000);
   }, []);

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
            visible={true}
            interactive
            offset={[0, 0]}
            onClickOutside={() => setShowResult(false)}
            render={(attrs) => (
               <div tabIndex="-1" className="bg-white rounded shadow-md overflow-auto w-96 min-h-[600px] max-h-[90vh]">
                  {
                     searchResult.map((result, index) => (
                        <div key={index}>
                           <p className="">{result.TITLE}</p>
                           {result.DATA.map((item, index) => (
                              <ResultItem data={item} type={result.TYPE} key={index} />
                           ))}
                        </div>
                     ))
                  }
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
                  className="absolute w-10 h-10 top-1/2 -right-px -translate-y-1/2 rounded-tr rounded-br border border-slate-400 outline-none text-white text-base bg-sky-800"
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
