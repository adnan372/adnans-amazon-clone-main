import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './BelowNav.css'

function BelowNav() {
  return (
    <section className='below-line'>
      
      
        <div className='left-items'>
        <MenuIcon className="menu-icon"/>
            <span>All</span>
            <span>Best sellers</span>
            <span>Mobile</span>
            <span>Customer Service</span>
            <span>Todays Deal's</span>
            <span>Fashions</span>

        </div>
        <div className='right-items'>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg" alt="" />

        </div>
    </section>
  )
}

export default BelowNav