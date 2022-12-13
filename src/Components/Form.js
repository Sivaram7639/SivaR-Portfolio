import React from 'react';
import "./Form.css";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";


const schema = yup.object().shape({
    firstName:yup.string().required("first name is required"),
    lastName: yup.string().required( "lastname is required"),
    age: yup.number().integer().positive().required("age is must be 18"),
    email: yup.string().email().required("enter email"),
    newPassword :yup.string().required( "set password").min(4).max(15),
    confirmPassword: yup.string().oneOf([yup.ref("newPassword"),null]),

})
 

function Form() {
    const{ register,handleSubmit,formState:{errors,isValid,isDirty}} = useForm(
        {resolver:yupResolver(schema),
        mode:"onChange"}
    );
    console.log(isValid)
   
  return (
    <div className="form">
        <form onSubmit={handleSubmit( (data) =>{
            console.log(data)

         })
        }>
            <input {...register("firstName")} className="inp" type="text" placeholder="Fname" />
            <p>{errors.firstName?.message}</p>
            <input {...register("lastName")} className="inp" type="text" placeholder="Lname" />
            <p>{errors.lastName?.message}</p>
            <input {...register("age")} className="inp" type="number" placeholder="Age" />
            <p>{errors.age?.message}</p>
            <input {...register("email")} className="inp" type="text" placeholder="Email" />
            <p>{errors.email?.message}</p>
            <input {...register("newPassword")} className="inp" type="password" placeholder="new password" />
            <p>{errors.newPassword?.message}</p>
            <input {...register("confirmPassword")} className="inp" type="password" placeholder="confirm password" />
            <p>{errors.confirmPassword?.message}</p>
            <input className="inp" type="SUBMIT" disabled={isDirty && !isValid } />
        </form>
    </div>
  )
}

export default Form