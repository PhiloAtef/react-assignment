
import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-bg py-4">
  <div className="container">
    <a className="navbar-brand text-white fs-2 fw-bold" href='#'>START FRAMEWORK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
        <li className='nav-item'>
          <a className='nav-link active text-white fw-bold' aria-current = "page" href='#'>ABOUT</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link text-white fw-bold' aria-current = "page" href='#'>PORTFOLIO</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link text-white fw-bold' aria-current = "page" href='#'>CONTACT</a>
        </li>

        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}
