import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navBarText } from '../utlies/constanse';
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu } from "react-icons/hi"
import PopupCards from './popupcards';

import { BoxVarint, FadeinNavbar, closeMenuVar, fadeIn, listVaritions, mobileNavVarient, popCards } from '../motion/motion';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const products = useSelector(state => state.cartState.cartList);
    const [navToggle, setNavToggle] = useState(false);
    const [Cardtoogle, setCardtoogle] = useState(false)
    const handlenavToggle = () => setNavToggle(!navToggle);
    return (
        <motion.div variants={FadeinNavbar} initial="hidden" animate="visible" className='z-30  sticky  top-0 bg-[#1D1D1F] lg:backdrop-blur-lg lg:bg-opacity-40 lg:backdrop-filter  ' >
            <div className='   ' >
                <div className=' max-w-[1240px] mx-auto h-[98px]  ' >
                    <div className='flex justify-between py-8  ' >
                        <Link to={"/"} className=' hidden   text-4xl   justify-center items-center text-center lg:flex   ml-4 text-black font-SFPRODISPLAYREGULAR    ' >iStore</Link>
                        <div className='' >



                            <motion.div variants={popCards} initial="hidden" animate={navToggle === false ? "visible" : "hidden"}  >
                                <HiMenu size={20} onClick={handlenavToggle} className='text-white ml-4 mt-2 lg:hidden ' />

                            </motion.div>

                            <motion.div variants={popCards} initial="hidden" animate={navToggle === true ? "visible" : "hidden"} >
                                <AiOutlineClose className='text-white ml-4  lg:hidden' onClick={handlenavToggle} size={20} />

                            </motion.div>




                        </div>
                        <Link to={`/`} ><h3 className=' lg:hidden  text-3xl   justify-center items-center text-center flex   ml-4 text-[#ffffff]   ' >iStore</h3></Link>
                        <div className='   items-center text-center ' >
                            <ul variants={FadeinNavbar} className='lg:flex text-[#f5f5ff] hidden space-x-8 mr-4   font-SFPRODISPLAYREGULAR  ' >

                                {navBarText.map((text, i) => {
                                    return <motion.li key={text.id} variants={listVaritions} ><Link to={text.link} className='text-[14px] leading-[44px] hover:text-[#d3d3d3] '  >{text.title}</Link></motion.li>
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
                        {/* mobile navbar */}
                        < PopupCards setCardtoogle={setCardtoogle} Cardtoogle={Cardtoogle} />

                        <AnimatePresence>

                            <motion.div

                                variants={mobileNavVarient}
                                initial="hidden"
                                animate={navToggle === true ? "visible" : "hidden"}
                                className={`lg:hidden absolute w-full mt-16 max-w-[300px]  z-50 flex flex-col text-center bg-[#1D1D1F] gap-4 font-SFPRODISPLAYREGULAR
                            ${navToggle === true ? `h-screen` : ""}  `}>

                                {navToggle === true ? navBarText.map((text) => {
                                    return (



                                        <Link variants={listVaritions} key={text.id} onClick={handlenavToggle} to={text.link} className='text-[14px] mt-16  text-white hover:text-[#d3d3d3] '  >
                                            <motion.li variants={listVaritions} className='list-none' >
                                                {text.title}
                                            </motion.li>
                                        </Link>




                                    )
                                }) : ""}
                            </motion.div>

                        </AnimatePresence>
                    </div>

                </div>
            </div>

        </motion.div >
    )
}

export default Navbar