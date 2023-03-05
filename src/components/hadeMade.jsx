import React from 'react'
import { add, remove } from '../store/cartSlice';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { LazyLoadImage } from "react-lazy-load-image-component";
function HeaderMaderCarder({ img, title, price, id, porcutdss }) {
    const disPathc = useDispatch();
    const handeleAddItem = () => {
        disPathc(add({ img, title, price, id, }))
    }

    return (
        <div className=' border-blue-200 rounded-lg font-SFPRODISPLAYREGULAR ' >

            <Link to={`/${id}`} className='flex flex-col  rounded-md border-t-2   mp-2 w-[300px] h-[400px] text-white'  >
                <div className='bg-white items-center justify-center text-center flex ' >
                    <LazyLoadImage src={img} effect='blur' className='h-[230px] px-3 pt-2 ' alt={title} />
                </div>
                <div className='flex flex-col mx-3  ' >
                    <h3 className='text-black mt-8 ' >{title.length > 60 ? title.slice(0, 60) + "..." : title}</h3>
                </div>
            </Link>
            <div className='' >
                <div className='ml-3' >
                    <p className='font-bold text-black  ' >${price}</p>

                </div>
                <button onClick={handeleAddItem} className='bg-blue-500 max-w-[140px] rounded-md m-2 text-white hover:bg-blue-600 capitalize  p-2 relative    ' >add to card</button>

            </div>
        </div>
    )
}

export default HeaderMaderCarder;