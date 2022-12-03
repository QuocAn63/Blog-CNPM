import React from 'react';
import FormInput from '../FormInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import config from '~/config';
import Button from '~/components/Button';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Wrapper } from '~/components/Popper'
import HeadlessTippy from '@tippyjs/react/headless';
import PublishMenu from './PublishMenu';
import Editor from './Editor';

function PublishPostForm() {
   const { createYupSchema } = config.yub;
   const { register } = useForm({ resolver: yupResolver(createYupSchema(['postTitle'])) });

   return (
      <div>
         <div>
            <FormInput outline register={register} name="postTitle" placeholder="Nhập tiêu đề bài viết" />
            <div className="flex items-center gap-5 mt-6">
               <div className="flex-1">
                  <FormInput outline register={register} name="tag" placeholder="Nhập chủ đề bài viết ( Tối thiểu 1 chủ đề )" />
               </div>
               <HeadlessTippy
                  trigger="click"
                  placement='bottom-end'
                  interactive
                  animation={false}
                  render={() => (<Wrapper ><PublishMenu /></Wrapper>)}
               >
                  <Button className="bg-white border-gray-300 text-gray-400 h-[42px]" outline rightIcon={faAngleDown}>
                     Xuất bản
                  </Button>
               </HeadlessTippy>
            </div>
            <div className="mt-4">
               <Editor />
            </div>
         </div>
      </div>
   );
}

export default PublishPostForm;
