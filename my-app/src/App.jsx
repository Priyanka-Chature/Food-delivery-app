import './index.css'
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (

    <div>
      <Navbar />  

      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/orders' element={<PlaceOrder/>}/>

      
    </Routes>
    </div> 
    
    
    
    
  )
}

export default App
