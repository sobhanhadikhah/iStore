import React, { useContext } from 'react'
import { CartProduct, ShowPages } from '../components';
import productsContext from '../context/context';
import { HeaderMaderCarder } from "../components/";
import useTitle from '../hooks/useTitle';
import { motion } from 'framer-motion';
import { itemBox, varBox } from '../motion/motion';
function ProductsList() {
    useTitle("All Products");
    const pContext = useContext(productsContext);
    return (
        <div>

            <div className='max-w-[1240px] mx-auto h-screen text-black ' >
                <h1 className='text-3xl mt-4 font-bold font-SFPRODISPLAYREGULAR py-3 my-3 xl:ml-0 ml-9  ' >All Products</h1>
                <motion.div variants={varBox} initial="hidden" animate="visible" className='grid   xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-4 place-items-center ' >
                    {pContext && pContext.dataP.map((p, i) => {
                        return <motion.div variants={itemBox} viewport={{ once: false }} key={p.id} >
                            <HeaderMaderCarder id={p.id} image={p.image} title={p.title} price={p.price} porcutdss={p} />
                        </motion.div>
                    })}
                </motion.div>
            </div>
        </div>
    )
}

export default ProductsList;