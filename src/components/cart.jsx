import React, { useState, useRef } from 'react'
import "../styles/card.css"
import { Link } from 'react-router-dom';
const Card = ({ titleCategory }) => {
    const [Xr, setXr] = useState(null);
    const [Yr, setYr] = useState(null);
    const cardRef = useRef(null)
    const handleOnMouseMove = (event) => {
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const { clientX, clientY } = event;
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        document.documentElement.style.setProperty("--mouse-x", `${x}px`);
        document.documentElement.style.setProperty("--mouse-y", `${y}px`);
        /* const reat = target. */
    }
    return (
        <div className='card' ref={cardRef} onMouseMove={handleOnMouseMove}  >
            <div className='text-center grid place-content-center justify-center items-center '  >
                <h1 className='text-2xl capitalize text-[2rem] grid place-content-center justify-center items-center my-24 font-SFPRODISPLAYREGULAR ' >   {titleCategory}</h1>
            </div>
            <div className='card-border text-center flex flex-col justify-end pb-8  ' >
                <div className='flex items-center justify-center ' >
                    <Link className='bg-black text-white rounded-3xl flex text-center justify-center place-items-center w-[120px] py-2 text-lg ' >Show All</Link>
                </div>
            </div>
            <div className='card-content' >
            </div>

        </div>
    )
}

export default Card