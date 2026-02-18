import React from 'react'
import './Home.css'
import bg from '../assets/homebg.jpg'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <section className='hero'>
                <div className='hero-bg'
                    style={{
                        backgroundImage: `url(${bg})`,



                    }}
                />

                <div className='hero-content'>
                    <h1 className='hero-title'>Welcome to Foodie Haven</h1>
                    <p className='hero-subtitle'>Discover delicious meals delivered to your doorstep.</p>
                    <button className='order-btn'>Order Now</button>

                </div>

            </section>
            <div className='category'>

            </div>










        </>
    )
}

export default Home