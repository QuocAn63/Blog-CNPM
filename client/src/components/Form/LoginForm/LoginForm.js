import React, { useEffect, useState } from 'react';
import FormInput from '../FormInput';
import { useForm } from 'react-hook-form';
import Button from '../../Button';
import { yupResolver } from '@hookform/resolvers/yup';
import config from '~/config';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

function LoginForm() {
   const location = useLocation()
   const [authMode, setAuthMode] = useState("login")
   const { createYupSchema } = config.yub;
   const {
      register,
      handleSubmit,
      clearErrors,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(createYupSchema(config.itemList.authFormData[authMode].inputs.reduce((prev, cur) => ({ ...prev, [cur.name]: config.yub.schema[cur.name] }), {}))),
   });

   useEffect(() => {
      clearErrors()
      setAuthMode(location.pathname.substring(1))
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [location])

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <>
         <div className="">
            <div className="flex justify-center">
               <span className="text-2xl font-bold mb-5">{config.itemList.authFormData[authMode].title}</span>
            </div>
            <div>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                     {
                        config.itemList.authFormData[authMode].inputs.map((input, index) => <FormInput {...input} register={register} error={errors[config.itemList.authFormData[authMode].inputs[index].name]} key={index} />)
                     }
                  </div>
                  <div className="flex justify-between py-6">
                     {
                        authMode === "login" ? <><Link to="/passwordforget" className="text-sm text-sky-600">
                           Quên mật khẩu?
                        </Link>
                           <Link to="/register" className="text-sm text-sky-600">
                              Đăng ký ngay
                           </Link></> : <Link to="/login" className="text-sm text-sky-600">
                           Đã có tài khoản ? Đăng nhập ngay
                        </Link>
                     }
                  </div>
                  <div className="text-center">
                     <Button primary text type="submit" className="bg-[#4c70ff] hover:no-underline">
                        {config.itemList.authFormData[authMode].title}
                     </Button>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
}

export default LoginForm;
