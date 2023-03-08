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
            <ShowPages title={category} />
            <div className='max-w-[1240px] mx-auto gap-6 ' >
                {status === "error" && <p>Error fetching data</p>}
                {status === "loading" && <Loading />}

                <div className='grid grid-cols-4 gap-6 ' >

                    {status === "success" && data.map((p, i) => {
                        return <HeaderMaderCarder id={p.id} key={p.id} title={p.title} price={p.price} image={p.image} />
                    })}

                </div>


            </div>
        </div>

    )
}

export default ProductsByCategory