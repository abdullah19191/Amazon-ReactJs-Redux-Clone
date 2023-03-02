import './App.css';
import Navbar from './components/headers/Navbar';
import MainComponent from './components/home/MainComponent';
import Footer from './components/footer/footer';
import Signin from './components/Authenticate/Signin';
import Signup from './components/Authenticate/Signup';
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<MainComponent/>}/>
          <Route path='/login' element={<Signin/>} />
          <Route path="/register" element={ <Signup/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
