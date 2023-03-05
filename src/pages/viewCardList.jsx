import React from 'react';
import { remove } from '../store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
const ViewCardList = () => {
    const usedispatch = useDispatch();
    const products = useSelector(state => state.cartState.cartList);
    const total = useSelector(state => state.cartState.total);
    const handleonRemove = () => {
        usedispatch(remove(products));
    }
    return (
        <div className='max-w-[1240px] mx-auto ' >
            <div>
                <h1 className='text-3xl font-SFPRODISPLAYREGULAR lg:ml-0 ml-3  font-semibold mt-6  ' >
                    Shopping Cart
                </h1>
                <h4 className='justify-end flex font-SFPRODISPLAYREGULAR mr-3 ' >Price</h4>
                <div className='border' />


            </div>
            {products.map((p, i) => {
                return (
                    <div key={p.id} >
                        <div className='border my-3 ' >
                            <div className='flex justify-between bg-[#EAEDED]   ' >
                                <div className='flex' >
                                    <img className='w-[120px] p-2 ' src={p.img} alt="" />

                                    <h3 className=' right-0 ml-4 font-SFPRODISPLAYREGULAR ' >{p.title}</h3>
                                </div>
                                <div  >

                                    <h1 className='px-3' >${p.price}</h1>
                                </div>
                            </div>
                            <div className='mx-3 my-3 ' >
                                <button onClick={handleonRemove} className='  text-sm hover:text-red-500 font-SFPRODISPLAYREGULAR hover:border-b-[1px] border-black  ' >Remove</button>

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