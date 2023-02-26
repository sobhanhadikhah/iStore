import React from 'react'
import { Link } from 'react-router-dom'
import { navBarText } from '../utlies/constanse';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenu } from "react-icons/hi"

const Navbar = () => {

    return (
        <div>
            <div className='bg-[#1D1D1F]' >
                <div className=' max-w-[1240px] mx-auto h-[98px]  ' >
                    <div className='flex justify-between py-8  ' >
                        <h3 className=' hidden   text-4xl   justify-center items-center text-center lg:flex   ml-4 text-white   ' >iStore</h3>
                        <HiMenu size={20} className='text-white ml-4 mt-2 lg:hidden ' />
                        <h3 className=' lg:hidden  text-3xl   justify-center items-center text-center flex   ml-4 text-[#ffffff]   ' >iStore</h3>
                        <div className=' flex justify-center items-center text-center ' >
                            <ul className='lg:flex text-[#f5f5ff] hidden space-x-8 mr-4   font-SFPRODISPLAYREGULAR  ' >

                                {navBarText.map((text, i) => {
                                    return <Link className='text-[14px] leading-[44px] hover:text-white ' key={text.id} >{text.title}</Link>
                                })}
                                <AiOutlineShoppingCart className='mt-[11px] hover:text-white cursor-pointer  ' size={20} />
                            </ul>
                            <AiOutlineShoppingCart className='mt-2 mr-4 lg:hidden text-white hover:text-white cursor-pointer  ' size={20} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar