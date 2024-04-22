import CardWrapper from '@/components/CardWrapper'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
    return (
        <>
            <Header pageName="Dashboard" />
            <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
                <CardWrapper />
            </main>
        </>
    )
}

export default page