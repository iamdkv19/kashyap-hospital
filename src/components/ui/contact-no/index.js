import React from 'react'
import "./ContactNo.scss" 
import QueIcon from "../../../images/quetions.png"
const ContactNo = () => {
  return (
    <div className='contact_no_wrp'>
    <div className='contact_no_details'>
        <img src={QueIcon} alt="queIcon"/>
        <p>Need a doctor for check-up? Call for an Emergency Service!</p>
        <h1>+911234567890</h1>
    </div>
    </div>
  )
}

export default ContactNo