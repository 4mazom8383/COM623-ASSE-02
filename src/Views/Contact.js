import React from "react";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  MDBBtn
} from 'mdb-react-ui-kit';


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

function ContactForm(props) {
  const { buttonText, onEmailSubmit, onSocialSubmit, serverErrorMessage } = props;

  const ContactFormSchema = yup
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactFormSchema),
  });


  const errorBorder = (error) => error && { borderColor: "red" };
  return (
  <Form_Container>
    <h1>Contact Us</h1>
    <form onSubmit={handleSubmit(onEmailSubmit)}>

      <label>Full Name</label>
      <input type="text" name="full name" {...register("fullname")} style={errorBorder(errors.fullname)}/>
      <StyledErrorLabel>{errors?.fullname?.message}</StyledErrorLabel>
      <StyledErrorLabel> {serverErrorMessage} </StyledErrorLabel>



      <label> Email </label>
      <input type="email"  style={errorBorder(errors.email)} {...register("email")} />
      <StyledErrorLabel>{errors?.email?.message}</StyledErrorLabel>


      <label>Subject</label>
      <input type="text" name="subject" {...register("subject")} style={errorBorder(errors.subject)}/>
      <StyledErrorLabel>{errors?.subject?.message}</StyledErrorLabel>
      <StyledErrorLabel> {serverErrorMessage} </StyledErrorLabel>


      <label>Message</label>
      <textarea {...register("messageTXT")} style={errorBorder(errors.messageTXT)} placeholder="Please enter your message here..."></textarea>
      <StyledErrorLabel>{errors?.messageTXT?.message}</StyledErrorLabel>
      <StyledErrorLabel> {serverErrorMessage} </StyledErrorLabel>

      <input class="btn" type="submit" value="Submit" />

  </form>
  </Form_Container>
  );
}


export default ContactForm;
