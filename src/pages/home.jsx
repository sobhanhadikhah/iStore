import React, { useEffect, useState } from 'react'
import { Card } from '../components';
import "../styles/card.css";
import axios from 'axios';
const Home = () => {
    const [Data, setData] = useState([])
    useEffect(() => async () => {
        const respone = await axios.get(`https://reqres.in/api/users?page=2`);
        setData(respone.data.data)
        console.log(respone.data.data);
    }, [])
    return (
        <div className=' cards max-w-[1240px]  mx-auto mt-24 h-screen ' >
            {Data ? Data && Data.map((data, i) => {
                return <Card key={data.id} />
            }) : ""}
        </div>
    )
}

export default Home;