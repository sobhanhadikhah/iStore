import { useState,  } from 'react'
import { About, Home, Loading, NotFoundPage, ProductsByCategory, ProductsInfo, ProductsList, ViewCardList } from "./pages";
import { useQuery, } from 'react-query';
import { Navbar } from "./components";
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
      setProductState(respone.data)
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

      <ProductsContext.Provider value={{ dataP: productState }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='gp' element={<ViewCardList />} />
          <Route path='products' element={<ProductsList />} />
          <Route path='/products/:id' element={<ProductsInfo />} />
          <Route path='/product/:category' element={<ProductsByCategory />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>

      </ProductsContext.Provider>
    </div>
  )
}

export default App
