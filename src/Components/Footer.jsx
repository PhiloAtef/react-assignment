import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className='text-center text-white'>
            <div className='footer-cards p-4'>
                <div className="card-group p-4">
                    <div className="card text-white">
                        <div className="card-body text-center">
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="card text-white">
                        <div className="card-body text-center">
                            <h3>AROUND THE WEB</h3>
                            <div className="icons">
                                <i className='fa-brands fa-facebook p-2 mx-1 border border-white rounded-circle icons'></i>
                                <i className='fa-brands fa-twitter p-2 mx-1 border border-white rounded-circle icons'></i>
                                <i className='fa-brands fa-linkedin p-2 mx-1 border border-white rounded-circle icons'></i>
                                <i className='fas fa-globe p-2 mx-1 border border-white rounded-circle icons'></i>
                            </div>
                        </div>
                    </div>
                    <div className="card text-white">
                        <div className="card-body text-center">
                            <h3>ABOUT FREELANCER</h3>
                            <p> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <p className="m-0 footer-text p-4">Copyright © Your Website 2021</p>
            </div>
    </footer>
    
    
    </>
  )
}
