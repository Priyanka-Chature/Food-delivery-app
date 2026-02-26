import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {

    const{food_list} = useContext(StoreContext)

  return (
    <div className='h-full mt-4 px-12 py-8 '>
        <h2 className='text-2xl font-bold text-center'>Top dishes near you</h2>
        <div className=' grid grid-cols-4 mt-12 gap-x-10 gap-y-12 '>
            {food_list.map((item, index) =>{
                return (
                    <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                )
            })}
        </div>
    </div>
  )
}

export default FoodDisplay