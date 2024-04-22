import { LoginForm } from '@/components/Login'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-1 items-center justify-center gap-4 p-4 md:gap-8 md:p-8 h-[80vh]'>
            <LoginForm />
        </div>
    )
}

export default page