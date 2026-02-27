import React, { useContext} from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../Context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {
    
    

    const{cartItems,addToCart,removeFromCart} = useContext(StoreContext);

    return (
        <div className="w-full h-full rounded-2xl shadow-2xl overflow-hidden flex flex-col cursor-pointer">

            <div className="w-full relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-50 object-cover rounded-t-xl" // consistent image area
                />
                
                    {!cartItems[id] ? 
                    <img className='absolute w-9 bottom-4 right-4 cursor-pointer rounded-full' onClick={() => addToCart(id)} src={assets.add_icon_white} alt=""/>:
                    <div className='absolute bottom-4 right-4 flex items-center gap-2.5 p-1.5 rounded-full bg-white'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" className='w-7'/>
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" className='w-7'/>
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
                
                



                <p className="text-amber-600 text-lg font-medium mt-auto pt-3">
                    ${price}
                </p>
            </div>
        </div>
    )
}

export default FoodItem