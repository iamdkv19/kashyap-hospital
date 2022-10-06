import React from "react";
import "./choice.scss";
import choicImage from "../../../images/Choice.png";
import btnIcon from "../../../images/about-button-icon.png";

const About = () => {
  return (
    <div className="choice_wrp">
      <div className="choice_left">
        <div className="img_wrp">
          <img src={choicImage} alt="choice" />
        </div>
      </div>
      <div className="choice_right d-flex justify-content-center flex-column">
        <div className="choice_right_inner">
          <h6>Care of Kids</h6>
          <h2>Why Choose Us?</h2>
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
