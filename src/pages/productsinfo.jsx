import React from 'react'
import { useParams } from 'react-router-dom'
function ProductsInfo() {
    const { id } = useParams()
    return (
        <div>
            {id}
        </div>
    )
}

export default ProductsInfo