import React from 'react'   
import Navbar from '../components/Navbar'
import { CarouselCrossfadeExample } from '../components/Carousel'

const Home = () => {
  return (
    <div>

      {/* Carousel */}
      {/* <div>
        <CarouselCrossfadeExample />
      </div> */}
      

      {/* Hero Section */}
      <section style={{ padding: '2rem', textAlign: 'center', background: '#f8f8f8' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to DineIn Restaurant</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Experience the best culinary delights in a cozy and modern atmosphere. Enjoy our chef's specials and a wide variety of dishes.
        </p>
      </section>

      {/* About Section */}
      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Why Choose Us?</h2>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', color: '#444' }}>
          <li style={{ marginBottom: '0.5rem' }}>✔ Fresh ingredients and authentic recipes</li>
          <li style={{ marginBottom: '0.5rem' }}>✔ Friendly staff and quick service</li>
          <li style={{ marginBottom: '0.5rem' }}>✔ Comfortable dine-in experience</li>
          <li>✔ Family-friendly and perfect for all occasions</li>
        </ul>
      </section>
    </div>
  )
}

export default Home