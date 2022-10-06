import React from 'react'
import "./Banner.scss"
import notificationIcon from "../../../images/bell.png"
const Banner = () => {
  return (
    <div className='banner_wrp'>
    <div className='banner_details'>
    <div className='banner_details_body'>
    <h4>Best Healing Service</h4>
      <h1>
      Kashyap is the No. 1 Hospital 
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu, vestibulum vel tristique. Dui adipiscing augue nibh purus, vehicula quis cursus </p>
     <div className='appointmentBtn'>
     <button>
     <span> Make Appointment </span>
     <img src={notificationIcon} alt="notification"/>
     
     </button>
     </div>
    </div>
     
    </div>
    </div>
  )
}

export default Banner