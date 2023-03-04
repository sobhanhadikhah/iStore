import React from 'react'
import { useSelector } from 'react-redux';
function PopupCards({ close }) {
    const prouctsCrads = useSelector(state => state.cartState.cartList);
    return (
        <div className='absolute right-[20vh] pt-12 hidden lg:flex ' >
            <div
                class="w-screen max-w-sm border border-gray-600 bg-gray-100 p-4 pt-4 sm:p-6 lg:p-8"
                aria-modal="true"
                role="dialog"
                tabindex="-1"
            >
                <button onClick={close}
                    class="relative ml-auto -mr-4 block text-gray-600 transition hover:scale-110"
                >
                    <span class="sr-only">Close cart</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-5 w-5"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <div class="mt-6 space-y-6">
                    <ul class="space-y-4">
                        {prouctsCrads.map((p, i) => (
                            <li class="flex items-center gap-4">
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    class="h-16 w-16 rounded object-cover"
                                />

                                <div>
                                    <h3 class="text-sm text-gray-900">{p.title}</h3>

                                    <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                                        <div>
                                            <dt class="inline">Price:</dt>
                                            <dd class="inline">{p.price}</dd>
                                        </div>


                                    </dl>
                                </div>
                            </li>

                        ))}

                    </ul>

                    <div class="space-y-4 text-center">
                        <a
                            href="#"
                            class="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
                        >
                            View my cart (2)
                        </a>

                        <a
                            href="#"
                            class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                        >
                            Checkout
                        </a>

                        <a
                            href="#"
                            class="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                        >
                            Continue shopping
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupCards;