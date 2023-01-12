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
  margin-bottom: 20vh;
  form{
    display: grid; width: 60vw; margin: 0 auto;}
  input{
    height: 55px;width:100%;  
    border: 2px solid rgba(136, 81, 237, 0.4);
    border-radius: 8px;
  }
  textarea{height: 100px;    padding: 1em;}
  input[type=submit]{
    
  }
`;

function ContactForm(props) {
  const { buttonText, onEmailSubmit, onSocialSubmit, serverErrorMessage } = props;

  const ContactFormSchema = yup
    .object({
      start_date: yup
        .date()
        .required("please enter project start date"),
      end_date: yup
        .date()
        .required("please enter project end date"),
      title: yup
        .string()
        .required("Please enter your project")
        .max(20, "Full name must be less than 20 letters"),
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
    <h1>Add New Project</h1>

    <form onSubmit={handleSubmit(onEmailSubmit)}>

      <label>Project Title</label>
      <input type="text" name="title" {...register("title")} style={errorBorder(errors.title)}/>
      <StyledErrorLabel>{errors?.title?.message}</StyledErrorLabel>
      <StyledErrorLabel> {serverErrorMessage} </StyledErrorLabel>


      <label for="birthday">Start date</label>
      <input type="date" name="start date" {...register("start_date")} style={errorBorder(errors.start_date)}/>
      <StyledErrorLabel>{errors?.start_date?.message}</StyledErrorLabel>

      <label for="birthday">End date</label>
      <input type="date" name="start date" {...register("end_date")} style={errorBorder(errors.end_date)}/>
      <StyledErrorLabel>{errors?.end_date?.message}</StyledErrorLabel>


      <label>Project Notes</label>
      <textarea {...register("messageTXT")} style={errorBorder(errors.messageTXT)} placeholder="Please enter your project Notes here..."></textarea>
      <StyledErrorLabel>{errors?.messageTXT?.message}</StyledErrorLabel>
      <StyledErrorLabel> {serverErrorMessage} </StyledErrorLabel>

      <input class="btn" type="submit" value="Add Project" />

    </form>
  </Form_Container>
  );
}


export default ContactForm;
