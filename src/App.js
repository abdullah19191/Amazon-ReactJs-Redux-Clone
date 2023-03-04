import './App.css';
import Navbar from './components/headers/Navbar';
import MainComponent from './components/home/MainComponent';
import Footer from './components/footer/footer';
import Signin from './components/Authenticate/Signin';
import Signup from './components/Authenticate/Signup';
import {Routes, Route } from "react-router-dom";
import ProductDetails from './components/productdetails/ProductDetails';
import Cart from './components/cart/Cart';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainComponent/>}/>
          <Route path='/login' element={<Signin/>} />
          <Route path="/register" element={ <Signup/>} />
          <Route path="/getproduct/:id/" element={<ProductDetails/>} />
          <Route path="/cart/" element={<Cart/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
