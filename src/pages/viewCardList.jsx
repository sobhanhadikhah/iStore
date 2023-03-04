import React from 'react'
import { useSelector } from 'react-redux';
const ViewCardList = () => {
    const products = useSelector(state => state.cartState.cartList);
    const total = useSelector(state => state.cartState.total);
    return (
        <div className='max-w-[1240px] mx-auto ' >
            <div>
                <h1 className='text-3xl font-SFPRODISPLAYREGULAR  font-semibold mt-6  ' >
                    Shopping Cart
                </h1>
                <h4 className='justify-end flex font-SFPRODISPLAYREGULAR mr-3 ' >Price</h4>
                <div className='border' />


            </div>
            {products.map((p, i) => {
                return (
                    <div key={p.id} >
                        <div >
                            <div className='flex justify-between bg-[#EAEDED] my-3 border ' >
                                <div className='flex' >
                                    <img className='w-[120px] p-2 ' src={p.img} alt="" />

                                    <h3 className=' right-0 ml-4 font-SFPRODISPLAYREGULAR ' >{p.title}</h3>
                                </div>
                                <div  >
                                    <h1 className='px-3' >${p.price}</h1>
                                </div>

                            </div>
                        </div>

                    </div>
                )
            })}
            <div className='flex justify-end mx-3 font-SFPRODISPLAYREGULAR ' >
                <h1>Subtotal ({products.length} items): ${total}</h1>
            </div>
        </div>
    )
}

export default ViewCardList;