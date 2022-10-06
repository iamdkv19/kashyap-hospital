import React from "react";
import "./Appointment.scss";
import contactIcon from "../../../images/contactIcon.png";
import btnIcon from "../../../images/about-button-icon.png";

const Appointment = () => {
  return (
    <div className="appointment_wrp">
      <div className="appointment_container">
        <div className="appontment_details">
        
          <form>
          <div>
          <p> Book Appointment</p>
          <h4> We are here for you</h4>
          </div>
      
            <div className="appointment_input">
              <img src={contactIcon} alt="contactIcon" />{" "}
              <label>your name <span>*</span></label>
              <input />
            </div>
            <div className="appointment_input">
              <img src={contactIcon} alt="contactIcon" />{" "}
              <label>your name <span>*</span></label>
              <input />
            </div>
            <div className="appointment_input">
              <img src={contactIcon} alt="contactIcon" />{" "}
              <label>your name <span>*</span></label>
              <input />
            </div>
            <div className="appointment_input">
              <img src={contactIcon} alt="contactIcon" />{" "}
              <label>your name <span>*</span></label>
              <input />
            </div>
            <button>
            Make Appointment <img src={btnIcon} alt="icon" />
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
