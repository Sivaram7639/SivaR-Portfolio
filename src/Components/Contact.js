import React, { useRef } from 'react';
import "./Contact.css";
import { useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';

const schema=yup.object().shape({
  name:yup.string().required("Name is Required"),
  email:yup.string().email().required("email is required"),
  phno:yup.number().integer().min(10).required("mobile number is required"),

})

function Contact() {
  const { register,formState:{errors,isDirty,isValid}}=useForm(
    { resolver:yupResolver(schema),
    mode:"onChange"
   
  });
  const form=useRef();

  const sendEmail =(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_yl3rd4l','template_cqwpu4e',form.current,'n1bdteyKH3x0rle9j');

  }
  const myFunction=()=>{
    document.getElementById("form").reset();
  }
  
  return (
    <div className="contact">
      <h2 className="cont">CONTACT</h2>
      <form ref={form} onSubmit={sendEmail}id="form">
      <input {...register("name")}className="inputs" placeholder='NAME'/>
      <p>{errors.name?.message}</p>
      <input {...register("email")} className="inputs" placeholder='EMAIL'/>
      <p>{errors.email?.message}</p>
      <input {...register("phno")} className="inputs"  placeholder='PH.NO'/>
      <p>{errors.phno?.message}</p>
      <input className="inputs" onClick={myFunction}  type="submit" disabled={isDirty &&!isValid }/>
      </form>
      </div>
  )
}

export default Contact;