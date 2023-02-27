import { useState, useEffect } from 'react'
import { Home, Loading, NotFoundPage } from "./pages";
import { useQuery, useQueryClient } from 'react-query';
import { Navbar, ShowPages } from "./components";
import ProductsContext from "./context/context";
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </ProductsContext.Provider>
    </div>
  )
}

export default App
