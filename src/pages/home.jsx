import React, { useEffect, useState, useContext } from 'react'
import { Card, ShowPages, CartProduct } from '../components';
import "../styles/card.css";
import 'swiper/css';

import { Swiper, SwiperSlide } from "swiper/react";
import axios from 'axios';
import productsContext from '../context/context';
const Home = () => {
    const Products = useContext(productsContext);
    return (
        <div>
            <ShowPages title="Home" />
            <div className='  max-w-[1240px]  mx-auto  h-screen  '>
                <h1>Home Products</h1>
                <div className='grid lg:grid-cols-4 grid-cols-1 gap-8 ' >
                    {Products.dataP.map((datas) => {
                        return <CartProduct key={datas.id} title={datas.title} img={datas.image} price={datas.price} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;