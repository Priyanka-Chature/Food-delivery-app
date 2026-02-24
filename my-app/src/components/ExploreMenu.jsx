import React from 'react'
import menu1 from '../assets/menu_1.png'
import menu2 from '../assets/menu_2.png'
import menu3 from '../assets/menu_3.png'
import menu4 from '../assets/menu_4.png'
import menu5 from '../assets/menu_5.png'
import menu6 from '../assets/menu_6.png'
import menu7 from '../assets/menu_7.png'

const ExploreMenu = () => {

  const menu_list=[
    {
      id:1,
      name:'salad',
      img:menu1
    },
    {
      id:2,
      name:'pizza',
      img:menu2
    },
    {
      id:3,
      name:'burger',
      img:menu3
    },
    {
      id:4,
      name:'pasta',
      img:menu4
    },
    {
      id:5,
      name:'dessert',
      img:menu5
    },
    {
      id:6,
      name:'drinks',
      img:menu6
    },
    {
      id:7,
      name:'seafood',
      img:menu7

    },
    {
      id:8,
      name:'seafood',
      img:menu1

    },
    {
      id:9,
      name:'seafood',
      img:menu1

    },
    {
      id:10,
      name:'seafood',
      img:menu1

    },
    {
      id:11,
      name:'seafood',
      img:menu1

    },
    {
      id:12,
      name:'seafood',
      img:menu1

    },
    {
      id:13,
      name:'seafood',
      img:menu1

    },
    {
      id:14,
      name:'seafood',
      img:menu1

    },
    {
      id:15,
      name:'seafood',
      img:menu1

    }
  ]
  return (
    <div className='w-full px-44 mt-14 flex flex-col gap-3'>
        <h1 className='text-[#262626] text-2xl font-bold '>Explore our menu</h1>
        <p className='max-w-[60%] text-[#808080] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis harum vero consectetur quae labore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis harum vero consectetur quae labore.  </p>
        <div className=' px-4 mx-auto flex items-center justify-between text-center gap-12 overflow-x-auto whitespace-nowrap w-full'>
          {menu_list.map((item,index)=>{
            return(
            <div key={index} className='mt-6'>
            <img src={item.img} alt='menu1' className='w-30 min-w-30 cursor-pointer border border-gray-400 rounded-full'></img>
            <p className='mt-2.5 text-[#747474] text-base cursor-pointer '>{item.name}</p>
          </div>
            )

          })}
        </div>
        <hr className='my-2.5 h-0.5 bg-[#ececec]'></hr>
    </div>
  )
}

export default ExploreMenu