import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Checkout from './Pages/Checkout';
import Details from './Pages/Details';
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';
import Cart from './Pages/Cart';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';

function App() {
  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/signup' element={ <Signup/> }/>
      <Route path='/login' element={ <Login/> }/>
      <Route path='/' element={ <Home/> }/>
      <Route path='/checkout' element={ <Checkout/> }/>
      <Route path='/details/:id' element={ <Details/> }/>
      <Route path='/cart' element={ <Cart/> }/>
      <Route path='/cart' element={ <Contact/> }/>
      <Route path='/cart' element={ <AboutUs/> }/>
    </Routes>
    <Footer />
    </BrowserRouter>

  );
}

export default App
