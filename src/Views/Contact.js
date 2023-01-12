import React, { useState } from "react";
import styled from "styled-components";

import { addDoc, collection } from 'firebase/firestore';
import { database } from '/Users/mazouz/Downloads/THIRD YEAR UNI WORK/CONTEMPORARY WEB APP/week 10 deploy 1.1/src/config/firebase.js';
 
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const StyledErrorLabel = styled.label`
    color: red;
    font-weight: bolder;
    margin: 0 0 2vh 0;
`;

const Form_Container = styled.div`
  margin-top:12vh;
  margin-bottom:20vh;
  form{
    display: grid; width: 60vw; margin: 0 auto;}
  input{
    height: 55px;width:100%;  
    border: 2px solid rgba(136, 81, 237, 0.4);
    border-radius: 8px;
  }
  textarea{height: 100px;}
  input[type=submit]{
    border-radius: 0px 35px 35px 35px !important;
  }

`;

function ContactForm() {

  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [Txt_message, setMessage] = useState('');

  function add_data(e){

    e.preventDefault()
    if(fullName === "" && email === "" && subject === "" && Txt_message === ""){
      return
    }
    const contactForm = collection (database, 'contact_messages')
    addDoc(contactForm, {fullName, email, subject,Txt_message})
      .then(response =>{
        console.log(response)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  // Error
  const schema = yup
    .object({
      email: yup
        .string()
        .email("please enter a valid email")
        .required("please enter a email"),
      fullname: yup
        .string()
        .required("Please enter your full name")
        .max(15, "Full name must be less than 15 letters"),
      subject: yup
        .string()
        .required("Please enter your subject")
        .max(20, "Subject must be less than 20 letters"),
      messageTXT: yup
        .string()
        .required("Please enter your message")
        .max(200, "The message must be less than 200 letters"),
    })
    .required();


    const { register,handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema)
    });
  
    const onSubmit = data => console.log(data);
    const errorBorder = (error) => error && { borderColor: "red" };
   

  return (
    <Form_Container>
      <h1>Contact Us</h1>
        <div onSubmit={handleSubmit(onSubmit)}>
          <form onSubmit={add_data}>
            <label>Full Name</label>
            <input type="text" name="fullname" value={fullName} onChange={e => setName(e.target.value)} {...register("fullname")} style={errorBorder(errors.fullname)}/>
            <StyledErrorLabel>{errors?.fullname?.message}</StyledErrorLabel>



            <label> Email </label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={errorBorder(errors.email)} {...register("email")} />
            <StyledErrorLabel>{errors?.email?.message}</StyledErrorLabel>


            <label>Subject</label>
            <input type="text" value={subject} onChange={e => setSubject(e.target.value)} name="subject" {...register("subject")} style={errorBorder(errors.subject)}/>
            <StyledErrorLabel>{errors?.subject?.message}</StyledErrorLabel>


            <label>Message</label>
            <textarea value={Txt_message} onChange={e => setMessage(e.target.value)} {...register("messageTXT")} style={errorBorder(errors.messageTXT)} placeholder="Please enter your message here..."></textarea>
            <StyledErrorLabel>{errors?.messageTXT?.message}</StyledErrorLabel>

            <input class="btn" type="submit" value="Submit"/>
        </form>
      </div>
    </Form_Container>
  );
};


export default ContactForm;