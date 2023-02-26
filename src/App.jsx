import { useState, useEffect } from 'react'
import { Home, Loading } from "./pages";
import { useQuery, useQueryClient } from 'react-query';
import { Navbar, ShowPages } from "./components";
import ProductsContext from "./context/context";
import axios from 'axios';

function App() {
  const [productState, setProductState] = useState([])
  const options = {
    method: 'GET',
    url: 'https://fakestoreapi.com/products',
  };
  const fetchProducts = async () => {
    console.log("fetching products from api ");
    const mrespone = await axios.request(options).then(function (respone) {
      console.log(respone.data);
    })
  }
  const { isLoading, isSuccess, isError, data, error } = useQuery(
    ["products"],
    fetchProducts,

  );




  if (isLoading) {
    return <Loading />
  }


  return (
    <div className='h-screen dark:bg-[#121212] bg-[#FAFAFA] overflow-auto ' >
      <ProductsContext.Provider value={productState}>
        <Navbar />
        <ShowPages />
        <Home />
      </ProductsContext.Provider>
    </div>
  )
}

export default App
