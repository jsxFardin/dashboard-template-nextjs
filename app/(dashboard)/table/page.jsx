"use client";
import TableComponent from '@/components/TableComponent'
import React from 'react'

const page = () => {
    return (
        <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
            <TableComponent />
        </main>
    )
}

export default page