import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loading from './loading';
import useTitle from '../hooks/useTitle';
function ProductsInfo() {
    const [Info, setInfo] = useState([])
    useTitle(Info && Info.title);
    const { id } = useParams()
    const options = {
        method: 'GET',
        url: `https://fakestoreapi.com/products/${id}`,
    }
    const fetchProduct = async () => {
        const mRespone = await axios.request(options).then(function (respone) {
            return setInfo(respone.data)
        })
    }
    const { isLoading, isSuccess, isError, data, error } = useQuery(
        [`productsInfo`],
        fetchProduct
    )
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            {Info && Info.id}
        </div>
    )
}

export default ProductsInfo