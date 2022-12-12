import React, { useState } from 'react';
import styled from 'styled-components';

import Memeber1 from '../assets/team_img/member1.png'; 
import Memeber2 from '../assets/team_img/member2.png'; 
import Memeber3 from '../assets/team_img/member3.png'; 


import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBContainer, MDBRow, MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBTypography,
  MDBBtn
} from 'mdb-react-ui-kit';


//Menu Tabs
const Menu_Tabs = styled.div`
    ul{border-bottom: 1px solid #ffffff26;justify-content: center !important; width: 100% !important; align-items: center !important;}
    ul li{width: 25%;} ul li a{padding: 2em 1em !important;text-align: center !important;}

    .nav-tabs .nav-link:hover{
        background-color: inherit !important;
    }
    .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link{
        background: linear-gradient(99.48deg, #56F29F 5.97%, #82D7F8 98.57%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        border-bottom: 4px solid;
        border-image: linear-gradient(99.48deg, #56F29F 5.97%, #82D7F8 98.57%) 2;
    }
`;

///
const Card_Body = styled.a`
    border-radius: 0px 48px 48px 48px;;  
    padding: 1em 0;    
    background: linear-gradient(151.85deg, #8E5AF1 0%, #5E19D6 100%);
    ul{display: inline-flex;} ul li{}
    a{margin-right:-0.6em;}
    a:last-of-type{align-items: center; justify-content: center; display: inline-flex;}
    section{display: flex; justify-content: space-between;}
`;

//Progress Bar
const Progress_container = styled.div`
    background: #ffffff73;
    height: 4px;
    margin: 0.5em 0 1rem 0;
    div{background: #FFFFFF; width:40%;height: 4px;display: flex; align-items: center;position: relative;}
    div:after{content: ""; display: table; clear: both; position: absolute; right: 0; width: 8px; height: 8px; background: yellow;}
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


//Profile Info
const Profile_info =  styled.div`
    width: 100%;
    display: grid;
    margin: 10vh auto 5vh auto;
    justify-content: center;
    align-items: center;
    .btn-link.disabled{
        background: linear-gradient(99.48deg, #56F29F 5.97%, #82D7F8 98.57%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-fill-color: transparent;
        font-weight: 700; font-size: 1rem;
    }
`;

export default function Profile() {
  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value: string) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <>

        <MDBContainer>
            <MDBRow>
                
                <Profile_info md='4' lg='4' xl='4'>
                    <MDBBtn href='#' toggle disabled color="link">
                        youssef fisal
                    </MDBBtn>
                    

                    <MDBBtn href='#' toggle disabled color="link">
                        Fahed@contact.me
                    </MDBBtn>
                    
                    <MDBBtn href='#' toggle disabled color="link">
                        Downtown street
                    </MDBBtn>
                </Profile_info>

                <Menu_Tabs>
                    <MDBTabs>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                                <b>In Review</b>
                            </MDBTabsLink>
                        </MDBTabsItem>

                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                                <b>In Progress</b>
                            </MDBTabsLink>
                        </MDBTabsItem>

                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
                                <b>On going</b>
                            </MDBTabsLink>
                        </MDBTabsItem>


                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab4')} active={justifyActive === 'tab4'}>
                                <b>Done</b>
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>

                    <MDBTabsContent>
                        <MDBTabsPane show={justifyActive === 'tab1'}>
                        <MDBContainer>
                            <MDBRow center>
                                <MDBCol md='12' lg='6' xl='6'>
                                    <br></br>
                                    <br></br>
                                    <MDBCard>
                                        <Card_Body>
                                            <MDBCardBody>
                                                <MDBCardTitle><b>Create Marketing Materials</b></MDBCardTitle>
                                                <span>Progress</span>
                                                <Progress_container size='12' lg='6' xl='6'>
                                                    <div></div>
                                                </Progress_container>
                                                <section>
                                                    <div>
                                                        <a><img src={Memeber1} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <a><img src={Memeber2} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <a><img src={Memeber3} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <MDBBtn size='sm' color='danger' tag='a' floating>+2</MDBBtn>
                                                    </div>
                                                    <div>
                                                        <a><img src={Memeber1} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <a><img src={Memeber2} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <a><img src={Memeber3} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <MDBBtn size='sm' color='danger' tag='a' floating>+2</MDBBtn>
                                                    </div>

                                                </section>

                                            </MDBCardBody>
                                        </Card_Body>    
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>

                        </MDBTabsPane>

                        <MDBTabsPane show={justifyActive === 'tab2'}>
                            <MDBContainer>
                                <MDBRow center>
                                    <MDBCol md='12' lg='6' xl='6'>
                                    <br></br>
                                    <br></br>
                                    <MDBCard>
                                        <Card_Body id="Second_Card">
                                            <MDBCardBody>
                                                <MDBCardTitle><b>Create Marketing Materials</b></MDBCardTitle>
                                                <span>Progress</span>
                                                <Progress_container size='12' lg='6' xl='6'>
                                                    <div></div>
                                                </Progress_container>
                                                <section>
                                                    <div>
                                                        <a><img src={Memeber1} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <a><img src={Memeber2} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <a><img src={Memeber3} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <MDBBtn size='sm' color='danger' tag='a' floating>+2</MDBBtn>
                                                    </div>
                                                    <div>
                                                        <a><img src={Memeber1} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <a><img src={Memeber2} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <a><img src={Memeber3} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <MDBBtn size='sm' color='danger' tag='a' floating>+2</MDBBtn>
                                                    </div>

                                                </section>

                                            </MDBCardBody>
                                        </Card_Body>    
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                            </MDBContainer>
                        </MDBTabsPane>

                        <MDBTabsPane show={justifyActive === 'tab3'}>
                            <MDBContainer>
                                <MDBRow center>
                                <MDBCol md='12' lg='6' xl='6'>
                                    <br></br>
                                    <br></br>
                                    <MDBCard>
                                        <Card_Body>
                                            <MDBCardBody>
                                                <MDBCardTitle><b>Create Marketing Materials</b></MDBCardTitle>
                                                <span>Progress</span>
                                                <Progress_container size='12' lg='6' xl='6'>
                                                    <div></div>
                                                </Progress_container>
                                                <section>
                                                    <div>
                                                        <a><img src={Memeber1} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <a><img src={Memeber2} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <a><img src={Memeber3} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <MDBBtn size='sm' color='danger' tag='a' floating>+2</MDBBtn>
                                                    </div>
                                                    <div>
                                                        <a><img src={Memeber1} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <a><img src={Memeber2} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <a><img src={Memeber3} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <MDBBtn size='sm' color='danger' tag='a' floating>+2</MDBBtn>
                                                    </div>

                                                </section>

                                            </MDBCardBody>
                                        </Card_Body>    
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                            </MDBContainer>
                        </MDBTabsPane>

                        <MDBTabsPane show={justifyActive === 'tab4'}>
                            <MDBContainer>
                                <MDBRow center >
                                <MDBCol md='12' lg='6' xl='6'>
                                    <br></br>
                                    <br></br>
                                    <MDBCard>
                                        <Card_Body id="Second_Card">
                                            <MDBCardBody>
                                                <MDBCardTitle><b>Create Marketing Materials</b></MDBCardTitle>
                                                <span>Progress</span>
                                                <Progress_container size='12' lg='6' xl='6'>
                                                    <div></div>
                                                </Progress_container>
                                                <section>
                                                    <div>
                                                        <a><img src={Memeber1} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <a><img src={Memeber2} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <a><img src={Memeber3} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <MDBBtn size='sm' color='danger' tag='a' floating>+2</MDBBtn>
                                                    </div>
                                                    <div>
                                                        <a><img src={Memeber1} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <a><img src={Memeber2} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <a><img src={Memeber3} className='img-fluid rounded-circle' width="30" height="30" alt='' /></a>
                                                        <MDBBtn size='sm' color='danger' tag='a' floating>+2</MDBBtn>
                                                    </div>

                                                </section>

                                            </MDBCardBody>
                                        </Card_Body>    
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                            </MDBContainer>
                        </MDBTabsPane>
                    </MDBTabsContent>
                </Menu_Tabs>
            </MDBRow>
        </MDBContainer>    

    </>
  );
}