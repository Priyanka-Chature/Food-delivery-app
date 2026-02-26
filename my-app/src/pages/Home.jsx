import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay';
import Header from '../components/Header'
import { useState } from 'react';

const Home = () => {

    const [category, setCategory] = useState("All");

    return (
        <>

            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category}/>




        </>
    )
}

export default Home
