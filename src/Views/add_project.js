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


function Add_data() {

  const [project_title, setName] = useState('');
  const [start_date, setStart] = useState('');
  const [End_Date, setEnd_Date] = useState('');
  const [project_notes, setNotes] = useState('');

  function add_data(e){

    e.preventDefault()
    if(project_title === "" && start_date === "" && start_date === "" && project_notes === ""){
      return
    }
    const projectDetails = collection (database, 'project_details')
    addDoc(projectDetails, {project_title, start_date, End_Date, project_notes})
      .then(response =>{
        console.log(response)
        alert("You're project has been successfully added to the database.")
      })
      .catch(error => {
        console.log(error.message)
        //alert(error.message)
      })
  }


  //Error handler
  const schema = yup.object({
    project_title: yup
      .string()
      .required("Please enter your project. Full name must be less than 20 letters")
      .max(30),
    messageTXT: yup
      .string()
      .required("Please enter your message. The message must be less than 200 letters")
      .max(200),
    start_date: yup
      .string()
      .required("Please enter project start date ex: mm/dd/yyyy")
      .max(12),
    End_Date: yup
      .string()
      .required("please enter project start date ex: mm/dd/yyyy")
      .max(12),
  }).required();

  const { register,handleSubmit,formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => console.log(data);
 

  return (
  <Form_Container>
    <h1>Add New Project</h1>
    <div onSubmit={handleSubmit(onSubmit)}>
      <form onSubmit={add_data}>
        <label>Project Title</label>
        <input type="text" {...register("project_title")} value={project_title} onChange={e => setName(e.target.value)} placeholder="Ex. Space X"></input>
        <StyledErrorLabel>{errors.project_title?.message}</StyledErrorLabel>


        <label>Start date</label>
        <input type="text" {...register("start_date")} value={start_date} onChange={e => setStart(e.target.value)} placeholder="mm / dd / yyyy"></input>
        <StyledErrorLabel>{errors?.start_date?.message}</StyledErrorLabel>


        <label>End date</label>
        <input type="text" {...register("End_Date")} value={End_Date} onChange={e => setEnd_Date(e.target.value)} placeholder="mm / dd / yyyy"></input>
        <StyledErrorLabel>{errors?.End_Date?.message}</StyledErrorLabel>


        <label>Project Notes</label>
        <textarea {...register("messageTXT")} value={project_notes} onChange={e => setNotes(e.target.value)} placeholder="Please enter your project Notes here..."></textarea>
        <StyledErrorLabel>{errors?.messageTXT?.message}</StyledErrorLabel>

       <input type="submit" class="btn"  value="Add Project"></input>
        

      </form>
    </div>
  </Form_Container>
  );
  
}

export default Add_data;
