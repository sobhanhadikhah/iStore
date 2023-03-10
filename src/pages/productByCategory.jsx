import React from 'react';
import { useParams } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Card, CartProduct, HeaderMaderCarder, ShowPages } from '../components';
import Loading from './loading';
const ProductsByCategory = () => {
    const { category } = useParams()

    useTitle(category)
    const fetchByCategory = async () => {
        const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        return data
    }
    const { isLoading, isSuccess, status, error, data } = useQuery(
        "categoryItems",
        fetchByCategory
    )
    if (status === "loading") {
        return <Loading />
    }
    return (
        <div>
            <div className='max-w-[1240px] mx-auto gap-6 ' >
                <h1 className='text-3xl font-SFPRODISPLAYREGULAR py-4 capitalize ml-3 ' >{category}</h1>
                <div className='border border-gray-300 my-3 ' />
                {status === "error" && <p>Error fetching data</p>}
                {status === "loading" && <Loading />}

                <div className='flex flex-wrap items-center md:justify-start justify-center    ' >

                    {status === "success" && data.map((p, i) => {
                        return <HeaderMaderCarder id={p.id} key={p.id} title={p.title} price={p.price} image={p.image} />
                    })}

                </div>


            </div>
        </div>

    )
}

export default ProductsByCategory