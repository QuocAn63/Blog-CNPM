import React from 'react';
import FormInput from './FormInput';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import { yupResolver } from '@hookform/resolvers/yup';
import config from '~/config';
import { Link } from 'react-router-dom';

function LoginForm() {
   const { username, password } = config.yub.schema;
   const { createYupSchema } = config.yub;
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(createYupSchema({ username, password })),
   });

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <>
         <div className="">
            <div className="flex justify-center">
               <span className="text-2xl font-bold mb-5">Đăng nhập</span>
            </div>
            <div>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                     <FormInput
                        label="Tên tài khoản hoặc Email"
                        placeholder="Nhập tên tài khoản hoặc địa chỉ Email"
                        register={register}
                        error={errors.username}
                        name="username"
                     />
                     <FormInput
                        label="Mật khẩu"
                        type="password"
                        placeholder="Nhập mật khẩu"
                        register={register}
                        error={errors.password}
                        name="password"
                     />
                  </div>
                  <div className="flex justify-between py-6">
                     <Link to="/passwordforget" className="text-sm text-sky-600">
                        Quên mật khẩu?
                     </Link>
                     <Link to="/register" className="text-sm text-sky-600">
                        Đăng ký ngay
                     </Link>
                  </div>
                  <div className="text-center">
                     <Button primary text type="submit" className="bg-[#4c70ff] hover:no-underline">
                        Đăng nhập
                     </Button>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
}

export default LoginForm;
