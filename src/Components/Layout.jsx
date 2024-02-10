import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Portfolio from "./portfolio";

export default function Layout(){
    return (
        
        <div className="d-flex flex-column justify-content-between ">
            <Navbar/>
            <About/>
            <Portfolio/>
            <Footer/>
        </div>
        
    )
}
