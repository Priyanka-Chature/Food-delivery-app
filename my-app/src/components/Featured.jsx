import React from 'react';

const featuredItems = [
  {
    title: 'Chef Special Pizza',
    description: 'A delicious pizza with fresh ingredients.',
    image: '/src/asset/5903724.jpg',
  },
  {
    title: 'Classic Burger',
    description: 'Juicy beef patty, fresh veggies, and our signature bun.',
    image: '/src/asset/5903749.jpg',
  },
  {
    title: 'Pasta Delight',
    description: 'Creamy pasta with a blend of Italian herbs and cheese.',
    image: '/src/asset/5903724.jpg',
  },
];

const Featured = () => {
  return ( 
  <div className='w-full justify-around h-2/4 bg-red-500 align-center items-center'>
    <h1 className='items-center text-lg text-center'>Featured Taste</h1>
    <div className='flex items-center justify-center gap-6'>
      {featuredItems.map((item, index) => (
        <div key={index} className='w-1/3 rounded-sm shadow-lg bg-white justify-center items-center flex flex-col gap-2 mt-8 pt-8'>
          <img src={item.image} alt={item.title} className='w-[50%] h-[50%] object-cover rounded-sm mt-12 pt-8' />
          <h2 className='text-xl font-bold mb-2 text-wrap text-center'>{item.title}</h2>
          <p className='text-gray-700 mb-8 text-wrap text-center'>{item.description}</p>
        </div>)
      )}
      

    </div>
  </div>
  );
};

export default Featured;