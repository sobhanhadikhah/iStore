import React, { useEffect, useState, useContext } from 'react'
import { Card, ShowPages, CartProduct, HeaderMaderCarder } from '../components';
import "../styles/card.css";
import 'swiper/css';
import 'swiper/css';
import useTitle from '../hooks/useTitle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import axios from 'axios';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import productsContext from '../context/context';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
const Home = () => {
    useTitle("Home");
    const Products = useContext(productsContext);
    return (
        <div className='w-full' >
            <div className='  ' >
                <Swiper className='lg:h-[70vh] h-[50%]  ' modules={[Navigation, Pagination, Scrollbar, A11y]} pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }} effect='' spaceBetween={50} slidesPerView={1} autoplay="true" navigation >
                    <SwiperSlide className=' items-center justify-center flex  ' >
                        <div className='absolute text-center  pb-8 bg-white backdrop-blur-xl backdrop-filter bg-opacity-30 rounded-md px-4 ' >
                            <h3 className=' lg:text-3xl text-xl font-SFPRODISPLAYREGULAR pb-6 font-bold mt-5  ' >Welcome to istore</h3>
                            <h3 className=' text-sm lg:text-lg pb-4 font-SFPRODISPLAYREGULAR w-[320px]  ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque perferendis, id neque dolorum, esse aliquam rerum minus delectus corrupti dolor alias, voluptates autem saepe. Debitis maxime temporibus quis magnam.</h3>
                            <Link to={`products`} className=' bg-black text-white px-4 py-1 font-SFPRODISPLAYREGULAR  rounded-md hover:bg-transparent hover:ring ring-black hover:text-black transition-all duration-150 ease-in-out  ' > Learn More  </Link>
                        </div>
                        <img className=' w-screen lg:h-[70vh] h-[460px]  object-top ' src="https://img.freepik.com/premium-photo/panorama-aurora-borealis-with-milky-way-galaxy-snow-mountain-coastline_49071-212.jpg?w=1380" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className=' items-center justify-center flex  ' >
                        <div className='absolute text-center  pb-8 bg-white backdrop-blur-xl backdrop-filter bg-opacity-30 rounded-md px-4 ' >
                            <h3 className=' lg:text-3xl text-xl font-SFPRODISPLAYREGULAR pb-6 font-bold mt-5  ' >Welcome to istore</h3>
                            <h3 className=' text-sm lg:text-lg pb-4 font-SFPRODISPLAYREGULAR w-[320px]  ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque perferendis, id neque dolorum, esse aliquam rerum minus delectus corrupti dolor alias, voluptates autem saepe. Debitis maxime temporibus quis magnam.</h3>
                            <Link to={`products`} className=' bg-black text-white px-4 py-1 font-SFPRODISPLAYREGULAR  rounded-md hover:bg-transparent hover:ring ring-black hover:text-black transition-all duration-150 ease-in-out  ' > Learn More  </Link>
                        </div>
                        <img className=' w-screen lg:h-[70vh] h-[460px]  object-top ' src="https://img.freepik.com/premium-photo/panorama-aurora-borealis-with-milky-way-galaxy-snow-mountain-coastline_49071-212.jpg?w=1380" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className=' max-w-[1240px] mx-auto ' >
                <div className='lg:flex hidden my-4 ' >
                    <h3 className='text-xl font-SFPRODISPLAYREGULAR font-bold ' >Big Deal !!!</h3>
                </div>
                <div className=' hidden lg:flex   ' >
                    <Swiper className='  ' modules={[Navigation, Pagination, Scrollbar, A11y]} pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }} effect='blur' spaceBetween={50} slidesPerView={3} autoplay="true" navigation   >
                        {Products.dataP.map((text, i) => {
                            return <SwiperSlide key={text.id} ><HeaderMaderCarder id={text.id} img={text.image} title={text.title} price={text.price} /></SwiperSlide>
                        })}

                    </Swiper>
                </div>

            </div>

        </div>
    )
}

export default Home;