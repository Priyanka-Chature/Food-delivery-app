import './index.css'
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Navbar from './components/Navbar'; 
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';


const App = () => {
  return (

    <div>
        <Navbar/>

      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/orders' element={<PlaceOrder/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path="*" element={<div className="p-8">Not Found</div>}/> 


      
    </Routes>
    </div> 
    
    
    
    
  )
}

export default App
