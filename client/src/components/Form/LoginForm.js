import React from 'react'
import FormInput from './FormInput'
import { useForm } from 'react-hook-form';
import Button from '../Button';
import { yupResolver } from '@hookform/resolvers/yup';
import config from '~/config';

function LoginForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(config.yub.emailSchema)
    });

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <div className="">
                <div className="flex justify-center">
                    <span className="text-2xl font-bold mb-5">
                        Đăng nhập
                    </span>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormInput label="Tên tài khoản hoặc Email" placeholder="Nhập tên tài khoản hoặc địa chỉ Email" register={register} error={errors.email} name="email" />
                        <FormInput label="Mật khẩu" type="password" placeholder="Nhập tên tài khoản hoặc địa chỉ Email" register={register} name="password" />
                        <Button primary text type="submit" className="bg-[#4c70ff] hover:no-underline" >Đăng nhập</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginForm