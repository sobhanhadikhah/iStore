import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Loading from './loading';
import { add } from '../store/cartSlice';
import useTitle from '../hooks/useTitle';
import { LazyLoadImage } from "react-lazy-load-image-component";
function ProductsInfo() {
    const disPatch = useDispatch();
    const [Info, setInfo] = useState([])
    useTitle(Info && Info.title);
    const { id } = useParams()
    const options = {
        method: 'GET',
        url: `https://fakestoreapi.com/products/${id}`,
    }
    const fetchProduct = async () => {
        const mRespone = await axios.request(options).then(function (respone) {
            return setInfo(respone.data)
        })
    }
    const { isLoading, isSuccess, isError, data, error } = useQuery(
        [`productsInfo`],
        fetchProduct
    )
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='max-w-[1240px] mx-auto h-screen font-SFPRODISPLAYREGULAR ' >
            <div>
                <div className='' >
                    <h1 className='tracking-widest font-SFPRODISPLAYREGULAR font-bold mt-24  ' >{Info && Info.title}</h1>
                    <div className='' >
                        <div className='bg-white grid grid-cols-2 ' >
                            <LazyLoadImage src={Info && Info.image} effect='blur' className="w-[230px] ml-4 bg-white mt-8 " />
                            <p>{Info && Info.description}</p>
                        </div>
                        <div className='flex justify-end' >
                            <button onClick={() => disPatch(add(Info))} className='bg-blue-500 p-2 font-SFPRODISPLAYREGULAR cursor-pointer hover:bg-blue-600  hover:ring-black text-white rounded-full ' >Add Card</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsInfo