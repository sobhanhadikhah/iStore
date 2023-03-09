import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navBarText } from '../utlies/constanse';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from 'framer-motion';
import { HiMenu } from "react-icons/hi"
import PopupCards from './popupcards';
import { fadeIn } from '../motion/motion';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const products = useSelector(state => state.cartState.cartList);
    const [navToggle, setNavToggle] = useState(false);
    const [Cardtoogle, setCardtoogle] = useState(false)
    const handlenavToggle = () => setNavToggle(!navToggle);
    return (
        <motion.div variants={fadeIn} initial="hidden" animate="visible" className='z-30  sticky  top-0 bg-[#1D1D1F] lg:backdrop-blur-lg lg:bg-opacity-40 lg:backdrop-filter  ' >
            <div className='   ' >
                <div className=' max-w-[1240px] mx-auto h-[98px]  ' >
                    <div className='flex justify-between py-8  ' >
                        <Link to={"/"} className=' hidden   text-4xl   justify-center items-center text-center lg:flex   ml-4 text-black font-SFPRODISPLAYREGULAR    ' >iStore</Link>
                        <HiMenu size={20} onClick={handlenavToggle} className='text-white ml-4 mt-2 lg:hidden ' />
                        <Link to={`/`} ><h3 className=' lg:hidden  text-3xl   justify-center items-center text-center flex   ml-4 text-[#ffffff]   ' >iStore</h3></Link>
                        <div className='   items-center text-center ' >
                            <ul className='lg:flex text-[#f5f5ff] hidden space-x-8 mr-4   font-SFPRODISPLAYREGULAR  ' >

                                {navBarText.map((text, i) => {
                                    return <Link to={text.link} className='text-[14px] leading-[44px] hover:text-[#d3d3d3] ' key={text.id} >{text.title}</Link>
                                })}
                                <div className='flex' >
                                    <AiOutlineShoppingCart className='mt-[11px]  hover:text-white cursor-pointer' onClick={() => setCardtoogle(!Cardtoogle)} size={23} />
                                    {/* useSelector for adding numbe of item you take ... */}
                                    <div>
                                        <h6 className='bg-black px-[5.5px] text-sm rounded-full  ml-1 font-SFPRODISPLAYREGULAR' >{products.length}</h6>
                                    </div>

                                </div>
                            </ul>
                            <div className='flex' >
                                <Link to={`gp`} > <AiOutlineShoppingCart className='mt-[11px]    hover:text-white text-white  lg:hidden flex cursor-pointer' size={20} /></Link>
                                <div>
                                    <h6 className='bg-white text-black lg:hidden flex  px-[4.5px] text-xs rounded-full   font-SFPRODISPLAYREGULAR' >{products.length}</h6>
                                </div>
                            </div>


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

        </motion.div>
    )
}

export default Navbar