import React from "react";
import "./feedback.scss";
import controlBtn from "../../../images/feedback-btn.svg";
import feedBackUserImage from "../../../images/feedback.jpeg";

const Feedback = () => {
  return (
    <div className="feedback_wrp">
      <div className="top">
        <h6>Feedback</h6>
        <h1>Our Happy Clients Says About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu,
          vestibulum vel tristique. Dui adipiscing augue nibh purus, vehicula
          quis cursus
        </p>
      </div>

      <div className="down">
        <div className="image_slider">
          <div className="image_slides">
            <img src={feedBackUserImage} alt="user" />
          </div>
          <div className="image_slides">
            <img src={feedBackUserImage} alt="user" />
          </div>
          <div className="image_slides">
            <img src={feedBackUserImage} alt="user" />
          </div>
          <div className="image_slides active">
            <img src={feedBackUserImage} alt="user" />
          </div>
          <div className="image_slides">
            <img src={feedBackUserImage} alt="user" />
          </div>
          <div className="image_slides">
            <img src={feedBackUserImage} alt="user" />
          </div>
          <div className="image_slides">
            <img src={feedBackUserImage} alt="user" />
          </div>
        </div>

        <div className="slider">
          <div className="slides">
            <p>Steven Lucy</p>
            <p>patient</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              odio molestie ipsum consequat semper enim blandit. Commodo feugiat
              posuere aliquam aliquet sed enim, scelerisque. Mauris, semper nec
              purus ullamcorper diam facilisi sed. Pretium semper pellentesque
              quis augue nibh congue. Diam sit nunc, venenatis facilisis
              elementum. Pellentesque luctus suspendisse sit vel diam euismod at
              egestas.
            </p>
          </div>
        </div>

        <div className="control">
          <div className="left">
            <img src={controlBtn} alt="btn" />
          </div>
          <div className="right">
            <img src={controlBtn} alt="btn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
