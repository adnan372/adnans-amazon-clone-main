import React from 'react'
import './Navbar.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <nav className='header'   >
      <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      <div className='headerSearch'>
        <input type="text" className='headerSearchInput' />
        <SearchIcon className='searchIcon' />
      </div>

      {/*header nav  */}
      <div className='header_nav'>
        <div className='header_opt'>
          <span className='header_optLineOne'>Hello </span>
          <span className='header_optLineTwo'>Select your Address</span>
        </div>

        <div className='header_opt'>
          <span className='header_optLineOne'>Hello Adnan</span>
          <span className='header_optLineTwo'>Sign in</span>
        </div>

        <div className='header_opt'>
          <span className='header_optLineOne'>Return</span>
          <span className='header_optLineTwo'> & Orders</span>
        </div>

      </div>
      <ShoppingBasketIcon className='bucket-icon'/>
      <div className='header_opt'>
      <span>0</span>
          
      </div>
      


    </nav>

    

  )
}

export default Navbar