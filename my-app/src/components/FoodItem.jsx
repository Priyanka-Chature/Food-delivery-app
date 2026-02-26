import React, { useState } from 'react'
import { assets } from '../assets/assets'

const FoodItem = ({ id, name, price, description, image }) => {

    const[itemCount , setItemcount] = useState(0);

    return (
        <div className="w-full h-full rounded-2xl shadow-2xl overflow-hidden flex flex-col">

            <div className="w-full">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-50 object-cover rounded-t-xl" // consistent image area
                />
                
                    {!itemCount?<img className='' onClick={() => setItemcount(prev =>prev+1)} src={assets.add_icon_white} alt=""/>:
                    <div>
                        <img onClick={() => setItemcount(prev =>prev-1)} src={assets.remove_icon_red} alt=""/>
                        <p>{itemCount}</p>
                        <img onClick={() => setItemcount(prev =>prev+1)} src={assets.add_icon_green} alt=""/>
                    </div>
}
            </div>
                


            <div className="px-5 py-4 flex flex-col flex-1">

                <div className="mb-2.5 flex items-center justify-between">
                    <p className="font-medium text-base truncate min-w-0 ">{name}</p>

                    <img className="w-16 h-auto shrink-0 mt-0.5" src={assets.rating_stars} alt="rating" />
                </div>


                <p className="text-[#747474] text-sm line-clamp-3">
                    {description}
                </p>



                <p className="text-amber-600 text-xl font-medium mt-auto pt-3">
                    ${price}
                </p>
            </div>
        </div>
    )
}

export default FoodItem