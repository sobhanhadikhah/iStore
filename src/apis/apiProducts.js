import axios from "axios";
const options = {
    method: "GET",
    url:"https://fakestoreapi.com/products/categories"
}
export const fetchProductsCategory = async ()=>{
        const {data}= await axios.get("https://fakestoreapi.com/products/categories")
        return data
        
}
