import React from 'react'
import menu1 from '../assets/menu_1.png'
import menu2 from '../assets/menu_2.png'
import menu3 from '../assets/menu_3.png'
import menu4 from '../assets/menu_4.png'
import menu5 from '../assets/menu_5.png'
import menu6 from '../assets/menu_6.png'
import menu7 from '../assets/menu_7.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, A11y, Autoplay } from "swiper/modules";

const ExploreMenu = ({ category, setCategory }) => {

  const menu_list = [
    { id: 1, name: "salad", img: menu1 },
    { id: 2, name: "pizza", img: menu2 },
    { id: 3, name: "burger", img: menu3 },
    { id: 4, name: "pasta", img: menu4 },
    { id: 5, name: "dessert", img: menu5 },
    { id: 6, name: "drinks", img: menu6 },
    { id: 7, name: "seafood", img: menu7 },
    { id: 8, name: "seafood", img: menu1 },
  ];

  const handleClick = (name) => {
    setCategory((prev) => (prev === name ? "All" : name));
  }

  return (
    <div className='w-full px-30 py-8 flex flex-col items-center gap-5'>
      <h1 className='text-[#262626] text-2xl font-bold '>Explore our menu</h1>
      <p className='max-w-[60%] text-[#808080] '>Chooose from a diverse menu featuring a delectable array of dishes . Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time. </p>

      <div className="w-full mt-4">
        <Swiper
          modules={[Pagination, FreeMode, Autoplay]}
          // spacing between slides
          spaceBetween={16}
          // base slides per view
          slidesPerView={3}
          // free scroll feel
          freeMode
          // optional autoplay (remove if not needed)
          autoplay={{ delay: 2000, pauseOnMouseEnter: true, disableOnInteraction: false }}
          // dots
          pagination={{
            clickable: true,
          }}
          // infinite loop
          loop
          // responsive breakpoints
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 12 },
            640: { slidesPerView: 3, spaceBetween: 14 },
            768: { slidesPerView: 4, spaceBetween: 16 },
            1024: { slidesPerView: 5, spaceBetween: 18 },
          }}
          className="px-4! pb-12"
        >
          {menu_list.map((item) => {
            const isActive = category === item.name;
            return (
              <SwiperSlide onClick={() => handleClick(item.name)} key={item.id}>
                <div className="mt-6 flex flex-col items-center text-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className={`w-30 min-w-30 cursor-pointer  rounded-full shadow-2xl 
                    ${isActive ? "border-orange-500 ring-2 ring-orange-500 p-0.5" : ""}`}
                  />
                  <p
                    className={`mt-2.5 text-[#747474] text-base cursor-pointer
                    ${isActive ? "text-orange-600 font-semibold" : "text-[#747474]"}`}
                  >
                    {item.name}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ExploreMenu