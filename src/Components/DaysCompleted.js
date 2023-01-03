import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//Import imgs
import Memeber1 from '../assets/team_img/member1.png'; 
import Memeber2 from '../assets/team_img/member2.png'; 
import Memeber3 from '../assets/team_img/member3.png'; 

import Chat from '../assets/team_img/chat.svg'; 
import video_call from '../assets/team_img/video_call.svg'; 
import call from '../assets/team_img/call.svg'; 

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBContainer, MDBRow, MDBCol
} from 'mdb-react-ui-kit';

///
const Card_Body = styled.a`
    border-radius: 0px 48px 48px 48px;;  
    padding: 1em 0;    
    background: linear-gradient(151.85deg, #8E5AF1 0%, #5E19D6 100%);
    ul{display: inline-flex;}
    a{margin-right:-0.6em;}

    section{display: flex; justify-content: space-between;}
    margin-bottom: 4vh;
`;

//Team
const Team = styled.div`
    display: flex; align-items: center;
    padding: 1em;background-color: rgb(41, 44, 56);
    display: flex;
    margin-bottom:2vh;
    justify-content: space-between;
    article{display: flex;}
    article img{margin-right:12px;}
    article h5{margin-bottom: 0px;}

    border-radius: 0px 16px 16px 16px;
`;

//
//Progress Bar
const Progress_container = styled.div`
    background: #ffffff73;
    height: 4px;
    margin: 0.5em 0 1rem 0;
    div{background: #FFFFFF; 
      width: ${props => props.percentage}%;
    height: 4px;display: flex; align-items: center;position: relative;}
    div:after{content: ""; display: table; clear: both; position: absolute; right: 0; width: 8px; height: 8px; background: yellow;}
`;




function DaysCompleted() {
  const Wrapper = styled.section`
    margin-top: 3vh;

 
    
  `;
  
  return (
    <Wrapper>

      <MDBContainer>
        <MDBRow>

          <MDBCol md='6' lg='6' xl='6'>
            <MDBCard>
              <Card_Body>
                <MDBCardBody>
                  <MDBCardTitle><b>Create Marketing Materials</b></MDBCardTitle>
                  <span>Progress </span>
                  <Progress_container percentage={75} size='12' lg='6' xl='6'>
                      <div ></div>
                  </Progress_container>
                  <section>
                      <div class="team">
                          <a><img src={Memeber1} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                          <a><img src={Memeber2} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                          <a><img src={Memeber3} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                          <a href="#!">+2</a>

                      </div>
                      <div class="contact_card">
                          <a><img src={call} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                          <a><img src={video_call} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                          <a><img src={Chat} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                      </div>
                  </section>
                </MDBCardBody>
              </Card_Body>    
            </MDBCard>
          </MDBCol>
            
          <MDBCol md='6' lg='6' xl='6'>
            <MDBCard>
              <Card_Body id="Second_Card">
                <MDBCardBody>
                  <MDBCardTitle><b>Create Marketing Materials</b></MDBCardTitle>
                  <span>Progress </span>
                  <Progress_container percentage={15} size='12' lg='6' xl='6'>
                      <div ></div>
                  </Progress_container>
                  <section>
                      <div class="team">
                          <a><img src={Memeber1} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                          <a><img src={Memeber2} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                          <a><img src={Memeber3} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                          <a href="#!">+2</a>

                      </div>
                      <div class="contact_card">
                          <a><img src={call} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                          <a><img src={video_call} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                          <a><img src={Chat} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                      </div>
                  </section>
                </MDBCardBody>
              </Card_Body>    
            </MDBCard>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
    </Wrapper>

  );
}


export default DaysCompleted;
