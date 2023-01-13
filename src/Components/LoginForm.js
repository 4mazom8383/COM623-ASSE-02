import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import login_img from "../assets/login.gif";


import Button from "../Components/Button";
import { useForm } from "react-hook-form";
import Input from "../Components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const StyledErrorLabel = styled.label`
    color: red;
    font-weight: bolder;
    margin: 1% 0 4% 0;
`;

const Head_TXT = styled.div`
    text-align: center;
    color: #CFCDCA;
  `;

const StyledSocialIconArea = styled.div`
    display: flex;
    justify-content: space-around;
    img {width:80%;background: radial-gradient(50% 50% at 50% 50%, rgba(217, 217, 217, 0.26) 0%, rgba(217, 217, 217, 0) 100%);}
  `;




function LoginForm(props) {
  const { buttonText, onEmailSubmit, serverErrorMessage } = props;
  const [displayEmail, setDisplayEmail] = useState(false);

  const loginFormSchema = yup
    .object({
      email: yup
        .string()
        .email("please enter a valid email")
        .required("please enter a email"),
      password: yup
        .string()
        .required("please enter a password")
        .min(5, "password must be 5 characters long"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

 

  const handleClick = (e) => {
    e.preventDefault();
    setDisplayEmail(!displayEmail);
  };

  const errorBorder = (error) => error && { borderColor: "red" };
  return (
    <React.Fragment>
      <StyledSocialIconArea>
        <img src={login_img} alt="#" />
      </StyledSocialIconArea>
      <Head_TXT> 
        <h2>Manage your <br></br>daily tasks </h2>
        <br></br>
        <p>Team and project managment with solution providing App</p>
      </Head_TXT>
      {!displayEmail && <Button onClick={handleClick} text="Email" />}

      {displayEmail && (
        <form onSubmit={handleSubmit(onEmailSubmit)}>

          <label> Email </label>
          <Input type="email" style={errorBorder(errors.email)} {...register("email")} />
          <StyledErrorLabel>{errors?.email?.message}</StyledErrorLabel>
          <br></br>
          <label> Password </label>
          <Input type="password" name="password" {...register("password")} style={errorBorder(errors.password)}/>
          <StyledErrorLabel>{errors?.password?.message}</StyledErrorLabel>
          <br></br>
          <StyledErrorLabel> {serverErrorMessage} </StyledErrorLabel>
          <Button Link to="/" text={buttonText} type="submit" />
        </form>
      )}
    </React.Fragment>
  );
}


LoginForm.propTypes = {
  buttonText: PropTypes.string,
};

LoginForm.defaultProps = {
  buttonText: "JOIN",
};
export default LoginForm;
