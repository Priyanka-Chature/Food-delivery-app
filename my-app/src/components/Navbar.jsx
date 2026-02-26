import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import searchIcon from '../assets/search_icon.png'
import cart from '../assets/basket_icon.png'

const Navbar = () => {

  const navigate= useNavigate();

  return (
    <nav className="h-20 px-6 w-full bg-[#eeeeee] flex items-center justify-between shadow sticky top-0 z-50">
      {/* Logo Section */}
      <div className="h-full w-[15%] flex justify-center items-center">
        <Logo />
      </div>
      {/* Navigation Links Section */}
      <div className="h-full w-[60%] flex items-center justify-center">
        <ul className=" flex gap-14">
          <li>
            <NavLink to="/" className={({ isActive }) => `no-underline text-m font-medium transition-colors duration-300 cursor-pointer ${isActive ? 'text-[#b34700]' : 'text-[#d65804]'}`}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={({ isActive }) => `no-underline text-m font-medium transition-colors duration-300 cursor-pointer ${isActive ? 'text-[#b34700]' : 'text-[#d65804]'}`}>Menu</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `no-underline text-m font-medium transition-colors duration-300 cursor-pointer ${isActive ? 'text-[#b34700]' : 'text-[#d65804]'}`}>About</NavLink>
          </li>
          <li>
            <NavLink to="/orders" className={({ isActive }) => `no-underline text-m font-medium transition-colors duration-300 cursor-pointer ${isActive ? 'text-[#b34700]' : 'text-[#d65804]'}`}>Orders</NavLink>
          </li>
        </ul>
      </div>
      {/* Search, Cart, and Login Section */}
      <div className="h-full flex items-center justify-center flex-1 gap-14">
        <div className="">
          <img src={searchIcon} alt="Search Icon" className="h-4 w-4" />
        </div>
        <div className="">
          <img src={cart} alt="Cart Icon" className="h-4 w-4" />
        </div>
        <button onClick={() => navigate("/login")} className="px-5 py-1.5 text-sm font-medium text-black border-2 border-amber-600 rounded-xl  outline-none cursor-pointer">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
