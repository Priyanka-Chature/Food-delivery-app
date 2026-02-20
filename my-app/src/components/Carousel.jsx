import React from 'react'
import { CCarousel, CCarouselItem } from '@coreui/react'

export const CarouselCrossfadeExample = () => {
  return (
    <div className="max-w-3xl mx-auto w-full">
      <CCarousel controls transition="crossfade" interval={3000} className="w-full">
        <CCarouselItem>
          <img className="w-full h-64 object-cover rounded-lg" src="/src/asset/5903724.jpg" alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <img className="w-full h-64 object-cover rounded-lg" src="/src/asset/5903749.jpg" alt="slide 2" />
        </CCarouselItem>
      </CCarousel>
    </div>
  )
}