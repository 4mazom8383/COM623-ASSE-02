import PropTypes from "prop-types";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import avatar from "../assets/avatar_small.png";
import useAuth from "../services/firebase/useAuth";


/* Stroke */
const Storke2 = styled.a`

    font-weight: bold;
    height: 36px;
    font-size: .875rem;
    text-transform: uppercase;
    padding: 0 16px 0 16px;

    display: inline-flex;
    align-items: center;


    color: #ffffff;

    box-shadow: 0px 2px 2px 0px #00000014;
    box-shadow: 0px 4px 4px 0px #0000002E;
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.1);

    transition: box-shadow 0.2s;
    &:hover{
        cursor: pointer;
        box-shadow: inset 130px 16px 2px rgba(15, 21, 112, 0.15);
    }
    &:active {
        box-shadow: inset 160px 36px 4px rgba(25, 141, 225, 0.25);
    }
`
const Icon2 = styled.svg`
    fill: #ffffff;
    width: 36px;
    height: 36px;
    display: inline-block;
  
  
    padding-right: 8px;
    stroke-width: 0.5;

`

const StyledNav = styled.nav`
    color:white!important;
    ul {  
      display: contents;
      flex-direction: column;
      align-items: center;
    }
  `;

const StyledLi = styled.li`
    margin-bottom: 10%;
    cursor: pointer !important;
    width: 100%;
    text-align: center;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme, active }) =>
    active ? theme.colors.darkShade[25] : ""};
    
    a{text-decoration: none;color:white !important;display: flex; justify-content: center; align-items: center; font-size: 1em; font-weight: 700;}
`;

const StyledBurgerMenu = styled.div`
    width: 90px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    hr {
      margin: 4px 0 0 4px;
      width: 25%;
      border: 1.5px solid white;
      opacity: .50;
    }
  `;

const StyledUserAvatar = styled.div`
    color: white;
    display: flex;
    align-items: center;
    img {
      width: 55px;
      height: 55px;

    }
  `;

const StyledMenuWrapper = styled.div`
    transition: all 1s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    height: 100vh;
    width: 304px;
    background: linear-gradient(180deg, #452F75 0%, #592CBA 100%); 
    border-radius: 0px 88px 88px 0px;    
    position: absolute;
    padding-top: 1%;
    top: 0;
    left: 0;
    z-index: 9999999999;
  `;

const StyledWrapper = styled.div`
    width: 100%;
    background: linear-gradient(180deg, #452F75 0%, #592CBA 100%); 
    height: 50px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 999999999;
`;


function Menu(props) {
  const { onClick } = props;
  const location = useLocation();


  return (

      <section>
        <div class="d-flex justify-content-end ">
          <button onClick={onClick} type="button" class="btn btn-primary btn-lg btn-floating">
            X 
          </button>
        </div>

        <StyledNav>
          <ul>
            <StyledLi active={location.pathname === "/"}>  <Link to="/"> Home </Link> </StyledLi>


            <StyledLi>
              <a>
                  <Icon2 viewBox="0 0 28 28">
                      <path d="M22.1 17.8182H21.2V10.9091C21.2 7.0996 17.9699 4 14 4C10.0301 4 6.80002 7.0996 6.80002 10.9091V17.8182H5.90001C5.4023 17.8182 5 18.2042 5 18.6818C5 19.1594 5.4023 19.5455 5.90001 19.5455H6.80002H10.4C10.4 21.4506 12.0146 23 14 23C15.9854 23 17.6 21.4506 17.6 19.5455H21.2H22.1C22.5977 19.5455 23 19.1594 23 18.6818C23 18.2042 22.5977 17.8182 22.1 17.8182ZM14 21.2727C13.0073 21.2727 12.2 20.498 12.2 19.5455H15.8C15.8 20.498 14.9927 21.2727 14 21.2727ZM19.4 17.8182H17.6H10.4H8.60003V10.9091C8.60003 8.05134 11.0219 5.72729 14 5.72729C16.9781 5.72729 19.4 8.05134 19.4 10.9091V17.8182V17.8182Z" fill="#D3D5DE"/>
                  </Icon2>
                  <span>Notifications</span>
              </a>
            </StyledLi>
            <StyledLi>
              <a>
                  <Icon2 viewBox="0 0 28 28">
                      <path d="M7.71094 16.1837L7.17188 14.9962L6 14.45L7.17188 13.9038L7.71094 12.7163L8.25 13.9038L9.42188 14.45L8.25 14.9962L7.71094 16.1837ZM10.6875 21.7888L9.86719 20.0312L8.13281 19.2L9.86719 18.3687L10.6875 16.6112L11.5078 18.3687L13.2422 19.2L11.5078 20.0312L10.6875 21.7888ZM10.6875 12.2888L9.86719 10.5312L8.13281 9.7L9.86719 8.86875L10.6875 7.11125L11.5078 8.86875L13.2422 9.7L11.5078 10.5312L10.6875 12.2888ZM21 23C19.1094 22.2083 17.582 20.9219 16.418 19.1406C15.2539 17.3594 14.6719 15.4792 14.6719 13.5C14.6719 12.0592 15.0117 10.6262 15.6914 9.20125C16.3711 7.77625 17.2969 6.5175 18.4687 5.425H14.5313V4H21V10.555H19.5938V6.30375C18.5156 7.28542 17.6602 8.42146 17.0273 9.71187C16.3945 11.0023 16.0781 12.265 16.0781 13.5C16.0781 15.0992 16.5312 16.635 17.4375 18.1075C18.3437 19.58 19.5312 20.6883 21 21.4325V23Z" fill="#D3D5DE"/>
                  </Icon2>
                  <span>Monthly Review</span>
              </a>
            </StyledLi>

            <StyledLi active={location.pathname === "/contact"}>
              <Link to="/contact">
                  <Icon2 viewBox="0 0 28 28">
                      <path d="M15.7325 17.85C16.0442 17.85 16.31 17.74 16.53 17.52C16.75 17.3 16.86 17.0342 16.86 16.7225C16.86 16.4108 16.75 16.145 16.53 15.925C16.31 15.705 16.0442 15.595 15.7325 15.595C15.4208 15.595 15.155 15.705 14.935 15.925C14.715 16.145 14.605 16.4108 14.605 16.7225C14.605 17.0342 14.715 17.3 14.935 17.52C15.155 17.74 15.4208 17.85 15.7325 17.85ZM15.045 14.385H16.3375C16.3742 13.8533 16.4521 13.4592 16.5712 13.2025C16.6904 12.9458 16.9883 12.5883 17.465 12.13C17.96 11.6533 18.3037 11.2363 18.4962 10.8788C18.6887 10.5213 18.785 10.1042 18.785 9.6275C18.785 8.78417 18.4963 8.09667 17.9188 7.565C17.3413 7.03333 16.585 6.7675 15.65 6.7675C14.9533 6.7675 14.33 6.95542 13.78 7.33125C13.23 7.70708 12.8267 8.23417 12.57 8.9125L13.8075 9.435C14.0092 8.97667 14.2613 8.62833 14.5638 8.39C14.8663 8.15167 15.2283 8.0325 15.65 8.0325C16.2 8.0325 16.6446 8.18833 16.9837 8.5C17.3229 8.81167 17.4925 9.20583 17.4925 9.6825C17.4925 10.0492 17.41 10.37 17.245 10.645C17.08 10.92 16.7867 11.2133 16.365 11.525C15.7783 12.0567 15.4117 12.4829 15.265 12.8038C15.1183 13.1246 15.045 13.6517 15.045 14.385V14.385ZM7.95 21.7C7.51 21.7 7.125 21.535 6.795 21.205C6.465 20.875 6.3 20.49 6.3 20.05V4.65C6.3 4.21 6.465 3.825 6.795 3.495C7.125 3.165 7.51 3 7.95 3H23.35C23.79 3 24.175 3.165 24.505 3.495C24.835 3.825 25 4.21 25 4.65V20.05C25 20.49 24.835 20.875 24.505 21.205C24.175 21.535 23.79 21.7 23.35 21.7H7.95ZM7.95 20.05H23.35V4.65H7.95V20.05ZM4.65 25C4.21 25 3.825 24.835 3.495 24.505C3.165 24.175 3 23.79 3 23.35V6.3H4.65V23.35H21.7V25H4.65ZM7.95 4.65V20.05V4.65Z" fill="#D3D5DE"/>
                  </Icon2>
                  <span>Contact</span>
              </Link>
            </StyledLi>

            <StyledLi active={location.pathname === "/faq"}>
              <Link to="/faq">
                  <Icon2 viewBox="0 0 28 28">
                      <path d="M21 5.84211V7.73684H18.1579V10.5789H16.2632V7.73684H13.4211V5.84211H16.2632V3H18.1579V5.84211H21ZM18.1579 19.1053H4.89474V5.84211H10.5789V3.94737H4.89474C3.85263 3.94737 3 4.8 3 5.84211V19.1053C3 20.1474 3.85263 21 4.89474 21H18.1579C19.2 21 20.0526 20.1474 20.0526 19.1053V13.4211H18.1579V19.1053ZM14.3684 13.4211V17.2105H16.2632V13.4211H14.3684ZM10.5789 17.2105H12.4737V9.63158H10.5789V17.2105ZM8.68421 17.2105V11.5263H6.78947V17.2105H8.68421Z"/>
                  </Icon2>
                  <span>FAQ</span>
              </Link>
            </StyledLi>

            <StyledLi active={location.pathname === "/ProjectDetails"}>
              <Link to="/ProjectDetails">
                  <Icon2 viewBox="0 0 28 28">
                      <path d="M21 5.84211V7.73684H18.1579V10.5789H16.2632V7.73684H13.4211V5.84211H16.2632V3H18.1579V5.84211H21ZM18.1579 19.1053H4.89474V5.84211H10.5789V3.94737H4.89474C3.85263 3.94737 3 4.8 3 5.84211V19.1053C3 20.1474 3.85263 21 4.89474 21H18.1579C19.2 21 20.0526 20.1474 20.0526 19.1053V13.4211H18.1579V19.1053ZM14.3684 13.4211V17.2105H16.2632V13.4211H14.3684ZM10.5789 17.2105H12.4737V9.63158H10.5789V17.2105ZM8.68421 17.2105V11.5263H6.78947V17.2105H8.68421Z"/>
                  </Icon2>
                  <span>Day Mode</span>
              </Link>
            </StyledLi>
          </ul>
        </StyledNav>

      </section>


  );
}

Menu.propTypes = {
  onClick: PropTypes.func.isRequired
};

function Header(props) {

  const { onClick, open } = props;

  const handleClick = e => {
    e.preventDefault();
    onClick(e);
  };


  const { user, signUserOut } = useAuth();

  if (!user.uid) { return "" }

  return (
    <div>
      <StyledMenuWrapper open={open}>
        <Menu onClick={handleClick} />
      </StyledMenuWrapper>


      <StyledWrapper>
        <StyledBurgerMenu onClick={handleClick}>
          <hr />
          <hr />
          <hr />
        </StyledBurgerMenu>
        <StyledUserAvatar>


        <div class="dropdown">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={user.photoURL || avatar} alt="avatar" />
            {user.displayName || user.email}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#" onClick={signUserOut}>Logout</a></li>
          </ul>
        </div>

        </StyledUserAvatar>
      </StyledWrapper>

    </div>


    
  );
}

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}


export default Header;
