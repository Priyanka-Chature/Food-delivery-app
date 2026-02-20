import React from 'react';

const featuredItems = [
  {
    title: 'Chef Special Pizza',
    description: 'A delicious pizza with fresh ingredients and a secret sauce.',
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
    <div className="flex flex-col gap-6 items-center py-8">
      {featuredItems.map((item, idx) => (
        <div key={idx} className="w-80 bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg rounded-xl border border-blue-200 flex flex-col items-center p-6">
          <div className="w-32 h-20 rounded-lg overflow-hidden shadow mb-3 flex items-center justify-center bg-white">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-blue-900 text-center">{item.title}</h3>
          <p className="text-gray-700 text-base text-center mb-2">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Featured;