import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function PopupCards({ close }) {
    const prouctsCrads = useSelector(state => state.cartState.cartList);
    const total = useSelector(state => state.cartState.total);
    return (
        <div className='absolute right-[20vh] pt-12 hidden lg:flex ' >
            <div
                className="w-screen max-w-sm border border-gray-600 bg-white   rounded-md  p-4 pt-4 sm:p-6 lg:p-8"

                role="dialog"
                tabIndex="-1"
            >
                <div>
                    <h1>Total Price: $ {total}</h1>
                </div>
                <button onClick={close}
                    className="relative ml-auto -mr-4 block text-gray-600 transition hover:scale-110"
                >
                    <span className="sr-only">Close cart</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <div className="mt-6 space-y-6">
                    <ul className="space-y-4  ">
                        {prouctsCrads.map((p, i) => (
                            <li className="flex items-center gap-4" key={p.id} >
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="h-16 w-16 rounded object-cover"
                                />

                                <div>
                                    <h3 className="text-sm text-gray-900">{p.title}</h3>

                                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                        <div>
                                            <dt className="inline">Price:</dt>
                                            <dd className="inline">{p.price}</dd>
                                        </div>


                                    </dl>
                                </div>
                            </li>

                        ))}

                    </ul>

                    <div className="space-y-4 text-center">
                        <Link
                            onClick={close}
                            to="gp"
                            className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 font-SFPRODISPLAYREGULAR hover:ring-gray-400"
                        >
                            View my cart {`(${prouctsCrads.length})`}
                        </Link>

                        <Link
                            to="#"
                            className="block rounded bg-black px-5 py-3 text-sm text-gray-100 transition font-SFPRODISPLAYREGULAR"
                        >
                            Checkout
                        </Link>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupCards;