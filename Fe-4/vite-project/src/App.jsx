import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home";
import NavbarLayout from "./Layout/NavbarLayout";
import Admin from "./Pages/Admin";
import Add from "./Pages/Add";
import Basket from "./Pages/Basket";
import Wishlist from "./Pages/Wishlist";
import Detail from "./Pages/Detail";
import { HelmetProvider} from 'react-helmet-async';
import Mainprovider from "./context/Mainprovider";
function App() {
  

  return (
    <>
    <Mainprovider>
     <HelmetProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarLayout />}>
          <Route index element={<Home/>} />
          <Route path="admin" element={<Admin />} />
          <Route path="add" element={<Add />} />
          <Route path="basket" element={<Basket />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<h1>No Page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
    </Mainprovider>
    </>
  )
}

export default App
