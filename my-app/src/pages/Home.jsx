import React from 'react'   

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
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Oder food, takeaway or book a table - at your fingertip </h2>
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
          <li>✔ Family-friendly and home like comfort</li>
        </ul>
      </section>
      {/* Services  */}
      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Services</h2>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', color: '#444' }}>
          <li style={{ marginBottom: '0.5rem' }}>✔ Family Gathering</li>
          <li style={{ marginBottom: '0.5rem' }}>✔ Party</li>
          <li style={{ marginBottom: '0.5rem' }}>✔ Birthday Celebrations</li>
          <li style={{fontSize: '1.1rem'}}>✔ Soothing Ambience and perfect dine-in place for all occasions</li>
          <li>Give Us A Chance to Serve...:)</li>
        </ul>
      </section>
    </div>
  )
}

export default Home