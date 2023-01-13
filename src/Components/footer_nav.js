import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MDBBtn} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";

function footer_nav() {

  const Bottom_Nav = styled.section`
    position: fixed;
    width: 80vw;
    height: 85px;
  
    
    background: rgba(148, 150, 155, 0.11);
    border: 0.5px solid rgba(36, 37, 40, 0.21);
    border-radius: 25px 25px 50px 50px;
  
    backdrop-filter: blur(15px);
    
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
  
    margin: 0 auto;
    bottom: 6vh;
    left: 0;
    right: 0;
  
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0em 8vw;
    ul{display: contents;}
  
    ul #third{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 65px;
      height: 65px;
      font-size:2em;
      border-radius: 100px !important;
      cursor: pointer;
      
      background: linear-gradient(180deg, #8648FF 0%, #5D24D8 100%);
      a{color:white;}
    }

    z-index: 99999;
  `;
  


  return (
    <Bottom_Nav class="footer">
        <ul>
            <Link to="/">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M5 13.5522C5 12.0297 5.69365 10.5902 6.88439 9.64156L10.8499 6.48222C12.673 5.02972 15.258 5.02972 17.0811 6.48222L21.0466 9.64155C22.2374 10.5902 22.931 12.0297 22.931 13.5522V21C22.931 22.6569 21.5879 24 19.931 24H8C6.34315 24 5 22.6569 5 21V13.5522Z" stroke="#D3D5DE" stroke-width="2"/>
                </svg>
            </Link>
            <li>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M18.2939 16.5786H17.3905L17.0703 16.2699C18.191 14.9663 18.8656 13.2739 18.8656 11.4328C18.8656 7.32762 15.538 4 11.4328 4C7.32762 4 4 7.32762 4 11.4328C4 15.538 7.32762 18.8656 11.4328 18.8656C13.2739 18.8656 14.9663 18.191 16.2699 17.0703L16.5786 17.3905V18.2939L22.2962 24L24 22.2962L18.2939 16.5786V16.5786ZM11.4328 16.5786C8.58548 16.5786 6.28702 14.2802 6.28702 11.4328C6.28702 8.58548 8.58548 6.28702 11.4328 6.28702C14.2802 6.28702 16.5786 8.58548 16.5786 11.4328C16.5786 14.2802 14.2802 16.5786 11.4328 16.5786Z" fill="#D3D5DE"/>
                </svg>
            </li>
        
            <Link to="/addProject" id="third" class="btn">
                    +
            </Link>
        
        
            <li>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M22.2039 18.5455H21.2948V11.2727C21.2948 7.26273 18.032 4 14.0221 4C10.0121 4 6.74935 7.26273 6.74935 11.2727V18.5455H5.84025C5.33752 18.5455 4.93115 18.9518 4.93115 19.4546C4.93115 19.9573 5.33752 20.3637 5.84025 20.3637H6.74935H10.3857C10.3857 22.3691 12.0166 24 14.0221 24C16.0275 24 17.6584 22.3691 17.6584 20.3636H21.2948H22.2039C22.7066 20.3636 23.113 19.9573 23.113 19.4545C23.113 18.9518 22.7066 18.5455 22.2039 18.5455ZM14.0221 22.1818C13.0193 22.1818 12.2039 21.3664 12.2039 20.3637H15.8403C15.8402 21.3664 15.0248 22.1818 14.0221 22.1818ZM19.4766 18.5455H17.6584H10.3857H8.56755V11.2727C8.56755 8.26457 11.0139 5.8182 14.0221 5.8182C17.0302 5.8182 19.4766 8.26457 19.4766 11.2727V18.5455V18.5455Z" fill="#D3D5DE"/>
                </svg>
            </li>
            <Link to="/profile">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M21.1839 16.9289C20.0947 15.8398 18.7983 15.0335 17.3838 14.5454C18.8988 13.502 19.894 11.7558 19.894 9.78125C19.894 6.59348 17.3006 4 14.1128 4C10.925 4 8.33154 6.59348 8.33154 9.78125C8.33154 11.7558 9.32682 13.502 10.8418 14.5454C9.42732 15.0335 8.13092 15.8398 7.04174 16.9289C5.15299 18.8177 4.11279 21.3289 4.11279 24H5.67529C5.67529 19.3475 9.46033 15.5625 14.1128 15.5625C18.7653 15.5625 22.5503 19.3475 22.5503 24H24.1128C24.1128 21.3289 23.0726 18.8177 21.1839 16.9289ZM14.1128 14C11.7866 14 9.89404 12.1075 9.89404 9.78125C9.89404 7.455 11.7866 5.5625 14.1128 5.5625C16.439 5.5625 18.3315 7.455 18.3315 9.78125C18.3315 12.1075 16.439 14 14.1128 14Z" fill="#D3D5DE" stroke="#D3D5DE" stroke-width="0.5"/>
                </svg>
            </Link>
        </ul>
    </Bottom_Nav>
  
  );
}



export default footer_nav;
