import React, { useState } from 'react';
import styled from 'styled-components';

import useAuth from "../services/firebase/useAuth";
import DaysCompleted from "../Components/DaysCompleted";


import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBContainer, MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';


//Menu Tabs
const Menu_Tabs = styled.div`
    ul{border-bottom: 1px solid #ffffff26;justify-content: center !important; width: 100% !important; align-items: center !important;}
    ul li{width: 25%;} ul li a{padding: 2em 1em !important;text-align: center !important;     color: white !important;}

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

  const { user, signUserOut } = useAuth();


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
                        {user.displayName || user.email}
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
                            <DaysCompleted></DaysCompleted>

                        </MDBTabsPane>

                        <MDBTabsPane show={justifyActive === 'tab2'}>
                            <DaysCompleted></DaysCompleted>
                        </MDBTabsPane>

                        <MDBTabsPane show={justifyActive === 'tab3'}>
                            <DaysCompleted></DaysCompleted>

                        </MDBTabsPane>

                        <MDBTabsPane show={justifyActive === 'tab4'}>
                            <DaysCompleted></DaysCompleted>
                        </MDBTabsPane>
                    </MDBTabsContent>
                </Menu_Tabs>
            </MDBRow>
        </MDBContainer>    

    </>
  );
}