import React from 'react'
import { AiOutlineLoading } from "react-icons/ai"
function Loading() {
    return (
        <div className='h-screen grid px-4 place-content-center  bg-white' >
            <div className='text-center items-center justify-center flex my-5 ' >
                <AiOutlineLoading className='animate-spin' size={30} />
            </div>
            <h3 className='tracking-widest text-gray-500 font-SFPRODISPLAYREGULAR ' >iStore</h3>

        </div>
    )
}

export default Loading;