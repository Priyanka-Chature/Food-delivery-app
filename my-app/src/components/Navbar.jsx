import '../index.css'

const Navbar = () => {
  return (
    <nav className='navbar items-center justify-between'>
      <h1>My Website</h1>
      <ul className='nav-links'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="login-btn">Login</button>
      
    </nav>
  );
}

export default Navbar;