import React from "react";
import styled from "styled-components";
import {MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';


function monthly_reviews() {

  const StyledDaysCompleteHeading = styled.h2`
    text-align: center;
    color: ${ props => props.theme.colors.purple};
  `;

  const Block = styled.a`
    font-weight: 900;
    margin-top: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 3vh;
    height: 200px;
    h4, p{
      background: linear-gradient(99.48deg, #56F29F 5.97%, #82D7F8 98.57%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    background: linear-gradient(146.17deg, #2C2F3B 27.48%, #232630 45.49%, #272934 65.48%);
    border-radius: 0px 26px 26px 26px;
  
  `;
  const Box_wrapper = styled.section`
    margin-bottom: 18vh;
  `;
  return (
    <Box_wrapper>

    <MDBContainer>
      <MDBRow center>
        <MDBCol md='3' lg='3' xl='3'>
          <Block>
            <h4>22</h4>
            <br></br>
            <p>Waiting for review</p>
          </Block>
        </MDBCol>


        <MDBCol md='3' lg='3' xl='3'>
          <Block>
            <h4>22</h4>
            <br></br>
            <p>On going Projects</p>
          </Block>
        </MDBCol>

        <MDBCol md='3' lg='3' xl='3'>
          <Block>
            <h4>22</h4>
            <br></br>
            <p>Done</p>
          </Block>
        </MDBCol>


        <MDBCol md='3' lg='3' xl='3'>
          <Block>
            <h4>22</h4>
            <br></br>
            <p>In progress</p>
          </Block>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    </Box_wrapper>
  );
}


export default monthly_reviews;
