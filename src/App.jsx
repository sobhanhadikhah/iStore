import { useState } from 'react'
import { Home } from "./pages";
import { Navbar } from "./components"
function App() {

  return (
    <div className='h-screen dark:bg-[#121212] bg-[black] overflow-auto ' >
      <Navbar />
      <Home />
    </div>
  )
}

export default App
