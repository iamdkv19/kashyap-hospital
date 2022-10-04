import React from 'react'
import './Contact.scss'
const Contact = () => {

  const Data = async()=>{
      const res  = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      const ApiData = await res.json()
      console.log(ApiData)
  }
  Data()

  return (
    <div>Contact</div>
  )
}

export default Contact