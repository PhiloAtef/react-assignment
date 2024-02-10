import React from 'react'
import port1 from "../assets/port1.png"


export default function Portfolio() {
  return (<>
    <section className='vh-100'>
      <div className="container text-center">
        <h1 className='fw-bold mt-3 blueish-text'>PORTFOLIO COMPONENT</h1>
        <div className='d-flex gap-3 justify-content-center'> 
           <span className='star blueish-span'></span>
           <i className='fa-solid fa-star'></i>
           <span className='star blueish-span'></span>
           </div>
           <div className="container">
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div className='rounded-3 overflow-hidden position-relative'>
                  <img src={port1} alt="" className='w-100' />
                </div>
              </div>
            </div>
           </div>
      </div>
    </section>
  </>
  )
}
