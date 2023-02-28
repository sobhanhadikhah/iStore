import React, { useEffect, useState, useContext } from 'react'
import { Card, ShowPages, CartProduct } from '../components';
import "../styles/card.css";
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import axios from 'axios';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import productsContext from '../context/context';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Home = () => {
    const Products = useContext(productsContext);
    return (
        <div className='w-full' >
            <div className='  ' >
                <Swiper className='lg:h-[460px] h-[50%]  ' modules={[Navigation, Pagination, Scrollbar, A11y]} pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }} effect='' spaceBetween={50} slidesPerView={1} autoplay="true" navigation >
                    <SwiperSlide className=' items-center justify-center flex  ' >
                        <div className='absolute text-center bg-white backdrop-blur-xl backdrop-filter bg-opacity-30 rounded-md px-4 ' >
                            <h3 className=' lg:text-3xl text-xl font-SFPRODISPLAYREGULAR pb-6 font-bold mt-5  ' >Welcome to istore</h3>
                            <h3 className=' text-sm lg:text-lg pb-4 font-SFPRODISPLAYREGULAR w-[320px]  ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque perferendis, id neque dolorum, esse aliquam rerum minus delectus corrupti dolor alias, voluptates autem saepe. Debitis maxime temporibus quis magnam.</h3>
                        </div>
                        <img className=' w-screen lg:h-[460px] h-[460px]  object-top ' src="https://img.freepik.com/premium-photo/panorama-aurora-borealis-with-milky-way-galaxy-snow-mountain-coastline_49071-212.jpg?w=1380" alt="" />
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className=' max-w-[1240px] mx-auto ' >
                <div className='lg:flex hidden my-4 ' >
                    <h3 className='text-xl font-SFPRODISPLAYREGULAR font-bold ' >Big Deal !!!</h3>
                </div>
                <div className='lg:flex flex-row hidden  ' >
                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }} effect='' spaceBetween={50} slidesPerView={3} autoplay="true" navigation   >
                        {Products.dataP.map((text, i) => {
                            return <SwiperSlide><CartProduct title={text.title} img={text.image} price={text.price} key={text.id} /></SwiperSlide>
                        })}

                    </Swiper>
                </div>

            </div>

        </div>
    )
}

export default Home;