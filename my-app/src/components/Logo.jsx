import React from 'react'
import { assets } from '../assets/assets.js';

const Logo = () => (
  <img 
    src={assets.logo} 
    alt="Logo" 
    className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24"
  />
);

export default Logo