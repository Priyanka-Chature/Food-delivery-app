import ExploreMenu from '../components/ExploreMenu'
import Header from '../components/Header'
import { useState } from 'react';

const Home = () => {

    const [category, setCategory] = useState("All");

    return (
        <>
        
           <Header/> 
            <ExploreMenu category={category} setCategory={setCategory}/>
        
        
            
           
        </>
    )
}

export default Home
