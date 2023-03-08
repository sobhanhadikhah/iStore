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
                    <h1 className='tracking-widest font-SFPRODISPLAYREGULAR font-bold mt-20 ml-4 ' >{Info && Info.title}</h1>
                    <div className='border border-gray-300 mx-4 mt-3 ' />
                    <div className='' >
                        <div className='bg-white grid grid-cols-1 md:grid-cols-2 ' >
                            <div className='flex justify-center items-center' >
                                <LazyLoadImage src={Info && Info.image} effect='blur  ' className="w-[230px]   bg-white mt-8 flex justify-center items-center text-center " />
                            </div>

                            <p className='mx-4 mt-8 ' >{Info && Info.description}</p>
                        </div>
                        <div className='flex justify-center md:justify-end mt-5  ' >
                            <div className=' md:flex text-center hidden justify-center items-center mr-5' >
                                <h1 className="text-xl  " >$ {Info && Info.price}</h1>
                            </div>

                            <button onClick={() => disPatch(add(Info))} className='bg-blue-500 mx-2 p-2 hidden md:flex font-SFPRODISPLAYREGULAR w-full md:w-auto cursor-pointer
                             hover:bg-blue-600  hover:ring-black text-white md:rounded-full rounded-md   ' >Add Card</button>
                            {/* for mobile btn */}
                            <div className='bg-white border-t border-gray-300 z-50 absolute bottom-0 w-full' >
                                <div className=' my-4 mx-3 bottom-0 absolute' >
                                    <h1 className="text-xl md:hidden flex " >$ {Info && Info.price}</h1>
                                </div>
                                <div className='flex  mt-5  justify-end ' >

                                    <button onClick={() => disPatch(add(Info))} className='bg-blue-500 mx-2 my-3 p-2 md:hidden flex font-SFPRODISPLAYREGULAR w-auto md:w-auto cursor-pointer
                                    hover:bg-blue-600  hover:ring-black text-white md:rounded-full rounded-md   ' >Add Card</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsInfo