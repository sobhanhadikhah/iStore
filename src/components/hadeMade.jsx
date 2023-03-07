import React from 'react'
import { add, remove } from '../store/cartSlice';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { LazyLoadImage } from "react-lazy-load-image-component";
function HeaderMaderCarder({ image, title, price, id, porcutdss }) {
    const disPathc = useDispatch();
    const handeleAddItem = () => {
        disPathc(add({ image, title, price, id, }))
    }

    return (
        <div className=' border-blue-200 rounded-lg font-SFPRODISPLAYREGULAR ' >

            <Link to={`/products/${id}`} className='flex flex-col    rounded-md border-t-2   mp-2 w-[300px] h-[400px] '  >
                <div className='bg-white items-center justify-center text-center flex ' >
                    <LazyLoadImage src={image} effect='blur' className='h-[230px] px-3 pt-2 ' alt={title} />
                </div>
                <div className='flex flex-col mx-3 relative  ' >
                    <h3 className='text-black mt-8 group-hover:underline group-hover:underline-offset-4  ' >{title.length > 60 ? title.slice(0, 60) + "..." : title}</h3>
                </div>
            </Link>
            <div className='' >
                <div className='ml-3' >
                    <p className='tracking-wide text-gray-900  ' > <span className='text-xs' >$</span> {price}</p>

                </div>
                <button onClick={handeleAddItem} className='bg-blue-500 max-w-[140px] rounded-md m-2 text-white hover:bg-blue-600 capitalize  py-1 px-[5.5px] relative    ' >add to card</button>

            </div>
        </div>
    )
}

export default HeaderMaderCarder;