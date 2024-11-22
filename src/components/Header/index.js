import React from 'react'
import "./index.css"
const Header = () => {
  return (
    <nav className='nav-header-container'>
        <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1732022117/rs_w_600_h_451_z3ygck.jpg' alt='logo' className='company-logo'/>
        <ul className='nav-menu-list-container'> 
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Partners</li>
            <li>Team</li>
            <li>Careers</li>
        </ul>
    </nav>

  )
}

export default Header