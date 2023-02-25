import React, { useState, useRef } from 'react'
import "../styles/card.css"
const Card = () => {
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
        console.log(clientX);
        console.log(clientY);
        /* const reat = target. */
    }
    return (
        <div className='card' ref={cardRef} onMouseMove={handleOnMouseMove}  >

        </div>
    )
}

export default Card