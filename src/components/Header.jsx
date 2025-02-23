import React from 'react'

const Header = () => {
    return (
        <div className='header'>

            <div className="header-right-logo">
                <img src="logo.png" alt="img" className='logo' />
            </div>
          <div className='header-left'>
          <ul className='categories'>
                <p>Home</p>
                <p>About us</p>
                <p>Service</p>
                <p>Portfolio</p>
            </ul>
            <button className='button'>
                Contact us
            </button>
          </div>
            <div className="menubar">
                <img src="download.png" alt='img' />
            </div>
        </div>
    )
}

export default Header