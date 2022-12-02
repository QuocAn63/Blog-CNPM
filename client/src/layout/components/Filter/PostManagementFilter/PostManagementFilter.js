import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import FormInput from '~/components/Form/FormInput';
import { Wrapper } from '~/components/Popper';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { set } from 'date-fns';

function PostManagementFilter() {
   const [TagSearchValue, setTagSearchValue] = useState('');
   const [ShowTagSearchMenu, setShowTagSearchMenu] = useState(false);
   const [PostSearchValue, setPostSearchValue] = useState('');
   const { handleSubmit, register } = useForm();
   const [, setSearchParams] = useSearchParams();

   const handleChangeTagSearch = (e) => {
      if (typeof e === 'string') {
         setTagSearchValue(e);
         setShowTagSearchMenu(false);
      } else {
         setTagSearchValue(e.target.value);
      }
   };

   const handleChangePostSearchInput = (e) => {
      setPostSearchValue(e.target.value);
   };

   const onSubmit = (data) => {
      setSearchParams(data);
   };

   return (
      <>
         <form onSubmit={handleSubmit(onSubmit)} method="get">
            <div className="flex flex-wrap gap-4 justify-center">
               <div className="inline-block border border-gray-300 bg-white rounded focus-within:border-sky-600 max-w-full">
                  <label className="inline-block px-3 text-sm">
                     <FormInput type="date" name="createdFrom" rightLabel="Từ" register={register} />
                  </label>
                  <span>-</span>
                  <label className="inline-block px-3 text-sm">
                     <FormInput type="date" name="createdTo" rightLabel="Đến" register={register} />
                  </label>
               </div>
               <Tippy
                  visible={ShowTagSearchMenu}
                  interactive
                  placement="bottom-end"
                  animation={false}
                  render={() => (
                     <Wrapper className="min-w-[200px]">
                        <ul>
                           <li
                              className="block px-5 py-2 text-sm cursor-pointer"
                              onClick={() => handleChangeTagSearch('Javascript')}
                           >
                              <span>Javascript</span>
                           </li>
                           <li
                              className="block px-5 py-2 text-sm cursor-pointer"
                              onClick={() => handleChangeTagSearch('Javascript')}
                           >
                              <span>Javascript</span>
                           </li>
                           <li
                              className="block px-5 py-2 text-sm cursor-pointer"
                              onClick={() => handleChangeTagSearch('Javascript')}
                           >
                              <span>Javascript</span>
                           </li>
                           <li
                              className="block px-5 py-2 text-sm cursor-pointer"
                              onClick={() => handleChangeTagSearch('Javascript')}
                           >
                              <span>Javascript</span>
                           </li>
                        </ul>
                     </Wrapper>
                  )}
               >
                  <div className="border border-gray-300 rounded px-3 flex-1 bg-white">
                     <FormInput
                        placeholder="Thẻ"
                        name="tag"
                        register={register}
                        value={TagSearchValue}
                        onChange={handleChangeTagSearch}
                        onClick={() => setShowTagSearchMenu(true)}
                     />
                  </div>
               </Tippy>
            </div>
            <div className="mt-5">
               <div className="flex items-center border border-gray-300 bg-white rounded w-full">
                  <FormInput
                     name="title"
                     register={register}
                     placeholder="Tìm kiếm"
                     value={PostSearchValue}
                     onChange={handleChangePostSearchInput}
                  />
                  <button>
                     <FontAwesomeIcon icon={faSearch} className="px-3 text-gray-500 cursor-pointer" />
                  </button>
               </div>
            </div>
         </form>
      </>
   );
}

export default PostManagementFilter;
