import axios from "axios";

const optionsgeter=(paramss) => {
    const options = {
        method:"GET",
    url:`https://fakestoreapi.com/products/category/${paramss}`
    }
    return options
}
export const fetchByCategory = async (paramss) => {
    const Mrespone = await axios.request(optionsgeter(paramss)).then(function (respone){
        return respone.data
    })
}