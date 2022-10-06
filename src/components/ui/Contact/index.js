import React, { useState } from "react";
import "./ContactForm.scss";
const ContactForm = () => {
const [input , setInput] = useState({
    name:'',
    mobNo:'',
    email:'',
    message:''
})
const [state, setState] =useState(()=>'deepak')

console.log(state)
const handlrForm = (e)=>{
    e.preventDefault()
    console.log(input)
    setState("verma")
    setInput({  name:'',
    mobNo:'',
    email:'',
    message:''})
}
  return (
    <div className="contact_wrp">
      <div className="form_details_wrp">
      <div className="contact_form_wrp">
        <div className="contact_heading">
          <p>
            Quick Online Consultany Only on <span>Few Minutes</span>
          </p>
        </div>
        <form onSubmit={handlrForm} className="form_input_fields">
          <div className="input_fields">
            
              <div className="Input_details">
                {" "}
                Your Name <span>*</span> <input value={input.name} type="text" onChange={(e)=>setInput({...input,name:e.target.value})} placeholder="" />
              </div>
            
          
              <div className="Input_details">
                {" "}
                Your Name <span>*</span> <input value={input.email} type="email" required  onChange={(e)=>setInput({...input, email:e.target.value})} placeholder="" />
              </div>
            
          </div>
          <div className="input_fields">
            
              <div className="Input_details">
                Your Name <span>*</span> <input required value={input.mobNo}  type="tel" onChange={(e)=>setInput({...input, mobNo:e.target.value})}  placeholder="" />
              </div>
            
            
              <div className="Input_details">
                Your Name <span>*</span> <input value={input.message} type="text"  onChange={(e)=>setInput({...input, message:e.target.value})}  placeholder="" />
              </div>
            
          </div>
          <button> Get Online Consultancy</button>

        </form>
      </div>
      </div>
    </div>
  );
};

export default ContactForm;
