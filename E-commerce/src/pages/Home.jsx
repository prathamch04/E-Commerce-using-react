import React from "react";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";

function Home (){
    return(
        <div>
            <Annoucement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
        </div>
    )
}

export default Home