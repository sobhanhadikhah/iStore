import React from 'react'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function CartProduct({ title, img, price }) {
    return (
        <Link className="group z-10 overflow-hidden justify-center items-center flex md:block md:mx-0 md:text-left flex-col text-center mx-8  ">
            <div className="relative h-[350px] sm:h-[450px]">
                <LazyLoadImage
                    effect='blur'
                    src={img}
                    alt=""


                />


            </div>

            <div className="relative bg-white pt-3">
                <h3
                    className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                    {title}
                </h3>

                <p className="mt-1.5 tracking-wide text-gray-900">${price}</p>

            </div>
        </Link>

    )
}

export default CartProduct;