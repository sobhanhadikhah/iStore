import React, { useEffect, useState, useContext } from 'react'
import { Card, ShowPages, CartProduct, HeaderMaderCarder } from '../components';
import "../styles/card.css";
import 'swiper/css';
import { motion } from 'framer-motion';
import 'swiper/css';
import { useQuery } from 'react-query';
import useTitle from '../hooks/useTitle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from 'axios';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import productsContext from '../context/context';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { fetchProductsCategory } from '../apis/apiProducts';
import { fadeIn, popCards } from '../motion/motion';
const Home = () => {
    /* this comment in branch v1.1 has to be */

    useTitle("Home");
    const Products = useContext(productsContext);
    const { isLoading, isError, data, error, isSuccess, initialData, initialStale, status } = useQuery("category", fetchProductsCategory
    )
    return (
        <div className='lg:mx-0 mx-4   ' >
            <div className={`md:mr-10 mr-0 md:mt-0 mt-10 relative flex-1 flex "flex justify-center items-center `} >
                <div className='absolute z-[3] rounded-full -left-1/2 top-0 w-[50%] h-[50%] white__gradient  ' />
                <div className='absolute z-[3] rounded-full -left-1/2 bottom-0 w-[50%] h-[50%] pink__gradient  ' />

            </div>
            <div className='   max-w-[1240px] mx-auto lg:pt-16 pt-10 font-bold capitalize   ' >

                <h1 className='flex justify-center lg:mx-0 mx-4 lg:text-8xl text-6xl   font-extrabold  text-center place-content-center font-SFPRODISPLAYREGULAR mb-8 ' >
                    Explore In milion<br /> Products
                </h1>
                <div className='text-center my-8 font-SFPRODISPLAYREGULAR ' >
                    <p>Used by some of the world's largest companies, Next.js enables you to create full-stack web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.</p>
                </div>
                <div className='' >
                    <input type="search" placeholder='Serch Your Product...' className='w-full px-6 font-SFPRODISPLAYREGULAR text-black  outline-none border-2 border-black py-3 rounded-3xl ' />
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto  mt-16 flex flex-wrap gap-4 justify-center my-6 ' >
                {status === "error" && <p>Error fetching data</p>}
                {status === "loading" && <div className='text-blue-400' ><AiOutlineLoading3Quarters className='animate-spin  ' size={20} /></div>}
                {status === "success" && (
                    <motion.div initial="hidden" whileInView={`visible`} variants={fadeIn} className='flex lg:flex-row md:flex-wrap flex-col   gap-3   ' >
                        {data.map((category, i) => (

                            <motion.div variants={popCards} key={category} >

                                <Card titleCategory={category} />

                            </motion.div>

                        ))}
                    </motion.div>
                )}

            </div>


        </div>
    )
}

export default Home;