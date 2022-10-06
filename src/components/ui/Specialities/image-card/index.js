import React, { useState } from 'react'
import "./ImageCard.scss"
import imageCard1 from "../../../../images/cardimage1.png"
import imageCard2 from "../../../../images/cardimage2.png"
import imageCard3 from "../../../../images/cardimage3.png"
import imageCard4 from "../../../../images/cardimage4.png"
import imageCard5 from "../../../../images/cardimage5.png"


const ImageCard = () => {
    const [image , setImage] = useState([imageCard5,imageCard4,imageCard3,imageCard2,imageCard1])
  console.log("image",image)
    return (
    <div className='image_card_wrp'>
    {
        image && image.map((elem , id)=>{
            return(
                <div className='image_card' key = {id}>
                    <img src={elem} alt="cardImage"/>
                </div>
            )
        })
    }
    </div>
  )
}

export default ImageCard