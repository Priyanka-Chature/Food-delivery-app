import '../index.css'

const Navbar = () => {
  return (
    <nav className='h-24 w-full flex items-center justify-between px-8 bg-blue-800' >
      <div>

      <h1 className='text-lg'>My Website</h1>
      </div>
      <ul className='flex items-center justify-between b-red-300 list-none'>
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