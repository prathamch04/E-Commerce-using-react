import React from "react";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Slider from "../components/Slider";

function Home (){
    return(
        <div>
            <Annoucement />
            <Navbar />
            <Slider />
        </div>
    )
}

export default Home