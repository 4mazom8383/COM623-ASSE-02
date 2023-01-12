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
  //const [end_date, setEnd_date] = useState('');
  const [project_notes, setNotes] = useState('');

  function add_data(e){

    e.preventDefault()
    if(project_title === "" && project_notes === ""){
      return
    }
    const projectDetails = collection (database, 'project_details')
    addDoc(projectDetails, {project_title, start_date, project_notes})
      .then(response =>{
        console.log(response)
      })
      .catch(error => {
        console.log(error.message)
      })
  }


  //Error handler
  const schema = yup.object({
    firstName: yup
      .string()
      .required("Please enter your project")
      .max(20, "Full name must be less than 20 letters"),
    messageTXT: yup
      .string()
      .required("Please enter your message")
      .max(200, "The message must be less than 200 letters"),
    start_date: yup
      .date()
      .required("please enter project start date"),
    end_date: yup
      .date()
      .required("please enter project end date"),
  }).required();

  const { register,handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => console.log(data);
  const errorBorder = (error) => error && { borderColor: "red" };
 
  return (
  <Form_Container>
    <h1>Add New Project</h1>
    <div onSubmit={handleSubmit(onSubmit)}>
      <form onSubmit={add_data}>

        <label>Project Title</label>
        <input 
          {...register("Project Title")}
          type="text" 
          value={project_title}
          onChange={e => setName(e.target.value)}
          style={errorBorder(errors.project_title)}
        />
        <StyledErrorLabel>{errors.project_title?.message}</StyledErrorLabel>


        <label>Start date</label>
        <input type="date" name="start_date" value={start_date} onChange={e => setStart(e.target.value)} {...register("start_date")} style={errorBorder(errors.start_date)}/>
        <StyledErrorLabel>{errors?.start_date?.message}</StyledErrorLabel>




        <label>Project Notes</label>
        <textarea 
        {...register("messageTXT")} 
        value={project_notes}
        onChange={e => setNotes(e.target.value)}
        style={errorBorder(errors.messageTXT)} 

        placeholder="Please enter your project Notes here..."></textarea>
        <StyledErrorLabel>{errors?.messageTXT?.message}</StyledErrorLabel>

        <input class="btn" type="submit" value="Add Project" />
        

      </form>
    </div>
  </Form_Container>
  );
}


export default Add_data;
