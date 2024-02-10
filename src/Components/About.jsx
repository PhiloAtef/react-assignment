import React from 'react'

export default function About() {
  return (
    <>
    
    <section className='d-flex justify-content-center align-items-center text-white about-section vh-100'>
        <div className="container text-center">
            <h1 className='fw-bold'>ABOUT COMPONENT</h1>
           <div className='d-flex gap-3 justify-content-center'> 
           <span className='star'></span>
           <i className='fa-solid fa-star'></i>
           <span className='star'></span>
           </div>
            <div className='row'>
                <div className='col-md-6'>
                    <p className='p-2 text-start'>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML, CSS,
                    and JavaScript as well as optional SASS stylesheets for easy
                    customization.
                    </p>
                </div>
                <div className='col-md-6'>
                <p className='p-2 text-start'>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization. 
                </p>
            </div>
            </div>
            
        </div>

    </section>
    </>
  )
}
