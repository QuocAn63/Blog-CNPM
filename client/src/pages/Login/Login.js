import React from 'react'
import { LoginForm } from '~/components/Form'

function Login() {
    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#e5ebf5]">
            <div className="max-w-screen-sm m-auto h-full">
                <div className="flex items-center h-full">
                    <div className="bg-white rounded-lg shadow w-full min-h-[50vh] py-14 px-10">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login