import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navBarText } from '../utlies/constanse';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenu } from "react-icons/hi"
import PopupCards from './popupcards';

const Navbar = () => {
    const [navToggle, setNavToggle] = useState(false);
    const [Cardtoogle, setCardtoogle] = useState(false)
    const handlenavToggle = () => setNavToggle(!navToggle);
    return (
        <div className='z-30  sticky  top-0 bg-[#1D1D1F] lg:backdrop-blur-lg lg:bg-opacity-40 lg:backdrop-filter ' >
            <div className='   ' >
                <div className=' max-w-[1240px] mx-auto h-[98px]  ' >
                    <div className='flex justify-between py-8  ' >
                        <Link to={"/"} className=' hidden   text-4xl   justify-center items-center text-center lg:flex   ml-4 text-white   ' >iStore</Link>
                        <HiMenu size={20} onClick={handlenavToggle} className='text-white ml-4 mt-2 lg:hidden ' />
                        <h3 className=' lg:hidden  text-3xl   justify-center items-center text-center flex   ml-4 text-[#ffffff]   ' >iStore</h3>
                        <div className='   items-center text-center ' >
                            <ul className='lg:flex text-[#f5f5ff] hidden space-x-8 mr-4   font-SFPRODISPLAYREGULAR  ' >

                                {navBarText.map((text, i) => {
                                    return <Link to={text.link} className='text-[14px] leading-[44px] hover:text-[#d3d3d3] ' key={text.id} >{text.title}</Link>
                                })}
                                <AiOutlineShoppingCart className='mt-[11px] hover:text-white cursor-pointer' onClick={() => setCardtoogle(!Cardtoogle)} size={20} />
                            </ul>
                            <AiOutlineShoppingCart className='mt-[11px] hover:text-white text-white mr-4 lg:hidden flex cursor-pointer' size={20} />


                        </div>
                        {Cardtoogle === true ? < PopupCards close={() => setCardtoogle(!Cardtoogle)} /> : ""}
                        <ul className={`lg:hidden absolute w-full mt-16  z-50 flex flex-col text-center bg-[#1D1D1F] backdrop-blur-lg bg-opacity-40 backdrop-filter font-SFPRODISPLAYREGULAR  ${navToggle === true ? `h-screen` : ""}  `} >
                            {navToggle === true ? navBarText.map((text) => {
                                return (
                                    <div className=' z-50 flex flex-col   ' key={text.id}  >
                                        <Link onClick={handlenavToggle} to={text.link} className='text-[14px] my-3 leading-[44px] text-white hover:text-[#d3d3d3] '  >{text.title}</Link>
                                    </div>
                                )
                            }) : ""}
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Navbar