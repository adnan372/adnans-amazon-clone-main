import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
  console.log('i render')
  return (
    
    <div className="home">
      
      <img className="banner_img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
      <div className='home_row'>
        <Product
          id="123456"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          price={11}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
        />

        <Product
          id="123456"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          price={11}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
        />


        <Product
          id="123457"
          title="POND'S White Beauty BB+ Cream with SPF 30, 9g"
          price={11}
          rating={3}
          image="https://m.media-amazon.com/images/I/418KfUub8sL._AC_SY175_.jpg"
        />
      </div>
      <div className='home_row'>
        <Product
          id="123456"
          title="Van Heusen Men's Solid Regular Fit Polo"
          price={11}
          rating={5}
          image="https://m.media-amazon.com/images/I/818ZQDOtcyL._AC_SY175_.jpg"
        />
        <Product
          id="123456"
          title="STRIFF Adjustable Laptop Stand Patented Riser Ventilated  with MacBook Notebook Tablet Tray Desk  with Free Phone Stand(Black)"
          price={11}
          rating={5}
          image="https://m.media-amazon.com/images/I/71Zf9uUp+GL._SY355_.jpg"
        />
        <Product
          id="123456"
          title="Philips GC1905 1440-Watt Steam Iron with Spray (Blue)"
          price={11}
          rating={5}
          image="https://m.media-amazon.com/images/I/81im8ZLf2lL._SX425_.jpg"
        />
        
      </div>
      <img className="banner_img2" src='https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg' alt="" />
      <div className='home_row'>
        <Product
          id="123456"
          title="Van Heusen Men's Solid Regular Fit Polo"
          price={11}
          rating={5}
          image="https://m.media-amazon.com/images/I/818ZQDOtcyL._AC_SY175_.jpg"
        />
        <Product
          id="123456"
          title="STRIFF Adjustable Laptop Stand Patented Riser Ventilated  with MacBook Notebook Tablet Tray Desk  with Free Phone Stand(Black)"
          price={11}
          rating={5}
          image="https://m.media-amazon.com/images/I/71Zf9uUp+GL._SY355_.jpg"
        />          
      </div>
      <div className='home_row'>
      <span>Website is Under construction ¯\_(ツ)_/¯ </span>
      </div>
    </div>
    


  )
}

export default Home
