import React, { useEffect, useState } from "react";
import DaysCompleted from "../Components/DaysCompleted";
import MonthlyReviews from "../Components/monthly_reviews";
import {MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import useAuth from "../services/firebase/useAuth";



function MainContent(){


  const { user, signUserOut } = useAuth();

  if (!user.uid) { return "" }

  return (
  <div>
    <br></br>
    <br></br>
    <br></br>

    <MDBContainer>
      <MDBRow center>
          <h3><b>Hello {user.displayName || user.email} </b> </h3>
          

          <DaysCompleted> </DaysCompleted>
      </MDBRow>

      <br></br>
      <br></br>
      <MDBRow center>
          <h3><b>Monthly Review</b></h3>
          <MonthlyReviews> </MonthlyReviews>
      </MDBRow>
    </MDBContainer>

  </div>


  );
};

export default MainContent;
