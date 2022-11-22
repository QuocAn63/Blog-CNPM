import React from 'react';
import FormInput from '../FormInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import config from '~/config';
import Button from '~/components/Button';

function PublishPostForm() {
   const { createYupSchema } = config.yub;
   const { register } = useForm({ resolver: yupResolver(createYupSchema(['postTitle'])) });

   return (
      <div>
         <div>
            <FormInput register={register} name="postTitle" placeholder="Nhập tiêu đề bài viết" />
            <div className="flex items-center gap-5">
               <div className="flex-1">
                  <FormInput register={register} name="tag" placeholder="Nhập chủ đề bài viết ( Tối thiểu 1 chủ đề )" />
               </div>
               <Button className="bg-white border-gray-300 text-gray-400 mt-6" outline>
                  Lưu bài viết
               </Button>
            </div>
         </div>
      </div>
   );
}

export default PublishPostForm;
