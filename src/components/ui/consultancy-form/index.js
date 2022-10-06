import React, { useState } from "react";
import "./ConsultancyForm.scss";
const ConsultancyForm = () => {
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
    <div className="Consultancy_wrp">
      <div className="form_details_wrp">
      <div className="Consultancy_form_wrp">
        <div className="Consultancy_heading">
          <h4>
             Get Free Consultany 
          </h4>
             <span>or call at</span>
             <span>+91 12345 67890</span>
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
          <button> Get Online Consultancy</button>

        </form>
      </div>
      </div>
    </div>
  );
};

export default ConsultancyForm;
