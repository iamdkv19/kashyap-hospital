import React from "react";
import "./ContactForm.scss";
const ContactForm = () => {
  return (
    <div className="contact_wrp">
      <div className="form_details_wrp">
      <div className="contact_form_wrp">
        <div className="contact_heading">
          <p>
            Quick Online Consultany Only on <span>Few Minutes</span>
          </p>
        </div>
        <div className="form_input_fields">
          <div className="input_fields">
            <form>
              <div className="Input_details">
                {" "}
                Your Name <span>*</span> <input placeholder="" />
              </div>
            </form>
            <form>
              <div className="Input_details">
                {" "}
                Your Name <span>*</span> <input placeholder="" />
              </div>
            </form>
          </div>
          <div className="input_fields">
            <form>
              <div className="Input_details">
                {" "}
                Your Name <span>*</span> <input placeholder="" />
              </div>
            </form>
            <form>
              <div className="Input_details">
                {" "}
                Your Name <span>*</span> <input placeholder="" />
              </div>
            </form>
          </div>
          <button> Get Online Consultancy</button>

        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactForm;
