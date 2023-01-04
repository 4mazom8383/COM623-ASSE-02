import React, { useEffect, useState } from "react";
import styled from "styled-components";


import Project_Card from "../Components/card_one";
import {MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';

import Chat from '../assets/team_img/chat.svg'; 
import call from '../assets/team_img/call.svg'; 

const Team = styled.div`
    margin-top:3vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #292C38;
    border-radius: 0px 16px 16px 16px;
    padding: 10px 20px;
`;
const Project_Wrapper = styled.div`
    margin-bottom: 20vh;
`;

function project_details(){
  return (
  <Project_Wrapper>

        <Project_Card></Project_Card>
        <MDBContainer>
            <br></br>
            <br></br>
            <MDBRow center>
                <MDBCol md='8' lg='8' xl='8'>
                    <h3><b>Team</b></h3>
                    <Team>
                        <div>
                            <h5><b>Wallace</b></h5>
                            <span>Head of Design</span>
                        </div>
                        <div class="contact_card">
                          <a><img src={call} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                          <a><img src={Chat} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                      </div>
                    </Team>

                    <Team>
                        <div>
                            <h5><b>Steven</b></h5>
                            <span>Head of Design</span>
                        </div>
                        <div class="contact_card">
                          <a><img src={call} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                          <a><img src={Chat} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                      </div>
                    </Team>

                    <Team>
                        <div>
                            <h5><b>Killmer</b></h5>
                            <span>Head of Design</span>
                        </div>
                        <div class="contact_card">
                          <a><img src={call} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                          <a><img src={Chat} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                      </div>
                    </Team>

                    <Team>
                        <div>
                            <h5><b>Robyn</b></h5>
                            <span>Head of Design</span>
                        </div>
                        <div class="contact_card">
                          <a><img src={call} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                          <a><img src={Chat} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                      </div>
                    </Team>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

  </Project_Wrapper>


  );
};

export default project_details;
