import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";

export default function Layout(){
    return (
        
        <div className="d-flex flex-column justify-content-between ">
            <Navbar/>
            <About/>
            <Footer/>
        </div>
        
    )
}
