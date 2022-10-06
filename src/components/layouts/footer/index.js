import React from "react";
import "./footer.scss";
import line from "../../../images/footer-line.svg";
import copyRight from "../../../images/footer-copyright.svg";
import map from "../../../images/map.jpeg";
import address from "../../../images/address.svg";

const Footer = () => {
  return (
    <div className="footer_wrp">
      <div className="top">
        <div className="column1">
          <p>Logo</p>
          <div className="map">
            <img src={map} alt="map" />
          </div>
        </div>

        <div className="col-wrp">
          <div className="column2">
            <p>Our Contacts</p>
            <div className="address">
              <div>
                <img src={address} alt="address" />{" "}
                <p>27 Division, St. New York NY 10002, USA</p>
              </div>
              <div>
                <img src={address} alt="address" />{" "}
                <p>27 Division, St. New York NY 10002, USA</p>
              </div>
              <div>
                <img src={address} alt="address" />{" "}
                <p>27 Division, St. New York NY 10002, USA</p>
              </div>
            </div>
          </div>
          <div className="column3">
            <p>Opening Hours</p>
            <div className="day">
              <p>
                Monday <span>08:00-21:00</span>
              </p>
              <p>
                Tuesday <span>08:00-21:00</span>
              </p>
              <p>
                Wednesday <span>08:00-21:00</span>
              </p>
              <p>
                Thursday <span>08:00-21:00</span>
              </p>
              <p>
                Friday <span>08:00-21:00</span>
              </p>
              <p>
                Saturday <span>08:00-21:00</span>
              </p>
              <p>
                Sunday <span>08:00-21:00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <p>
            Terms of Use
            <img src={line} alt="line" />
            Privacy Environmental Policy
          </p>
        </div>
        <div className="right">
          <p>
            Copyright
            <img src={copyRight} alt="copyright" />
            2022-All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
