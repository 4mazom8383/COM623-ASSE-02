import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Txt_btn = styled.div`
  button{
    height: 45px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;

    background: linear-gradient(151.85deg, #8E5AF1 0%, #5E19D6 100%);
    border-radius: 0px 35px 35px 35px;
    border: none;
    box-shadow:none;
  }
  `;
function Button(props) {

  const {onClick, text} = props;
    
 

  return(  

    <Txt_btn>
      <button onClick={onClick} class="btn btn-primary">{text}</button>
    </Txt_btn>

  )
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    onClick: () => {}
}

export default Button;