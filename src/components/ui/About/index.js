import React from "react";
import "./about.scss";
import aboutImage from "../../../images/about-home-page.png";
import btnIcon from "../../../images/about-button-icon.png";

const About = () => {
  return (
    <div className="about_wrp">
      <div className="about_left">
        <div className="img_wrp">
          <img src={aboutImage} alt="about" />
        </div>
      </div>
      <div className="about_right d-flex justify-content-center flex-column">
        <div className="about_right_inner">
          <h6>About Us-</h6>
          <h2>Professional Medical Care in Full Measure</h2>
          <p className="first_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna
            ullamcorper aliquam sit ullamcorper velit tellus. Ut tortor libero
            vulputate sit. Amet libero facilisi ultrices tincidunt sed. Morbi
            elementum leo condimentum magna nunc mi, scelerisque fringilla est.
            Convallis pretium nec mollis euismod.
          </p>
          <p className="last_text">
            Lorem sed iaculis non dui ut non enim, amet. Aliquam morbi semper
            consectetur ante id amet pulvinar elit. Nibh enim, quis tortor
            libero bibendum neque, blandit vulputate nunc.
          </p>

          <button>
            Learn More <img src={btnIcon} alt="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
