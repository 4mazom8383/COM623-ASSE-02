import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Montserrat:wght@400;700&display=swap');
*{font-family: 'Montserrat', sans-serif;list-style: none;}

body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background: #1D1F25;
    color:white;
}

h1 {
    font-size: ${({ theme }) => theme.typography.h1.fontSize};
}

h2 {
    font-size: ${({ theme }) => theme.typography.h2.fontSize};
}


h3 {
   font-size: ${({ theme }) => theme.typography.h3.fontSize};
}


h4 {
    font-size: ${({ theme }) => theme.typography.h4.fontSize};
}

h6 {
    font-size: ${({ theme }) => theme.typography.h6.fontSize};
    font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
}

em {
    font-size: ${({ theme }) => theme.typography.em.fontSize};
}

h3{
    background: linear-gradient(99.48deg, #56F29F 5.97%, #82D7F8 98.57%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

p::before{content: inherit !important;}

//Card
.card-body{color:white !important;}
.card{background-color: inherit!important;margin: 0 1em;}

.team>a:last-of-type{
    align-items: center;
    justify-content: center; 
    display: inline-flex;
    width: 30px;
    height:30px;
    background-color: red;
    border-radius: 100px;font-size:12px;color: #452b2b;
  }

.contact_card{
    display: flex;
    align-items: center;
    a{margin-right: 5px !important;}
}

#Second_Card{background: linear-gradient(151.85deg, #10C9F9 0%, #004783 100%) !important}
#second_review_card{margin-bottom: 20vh;}
.contact_card{
    display: flex;
    align-items: center;
    a{margin-right: 0em;}
}



.dropdown{margin-right:5vw;margin-top:5vh;}.dropdown-menu.show{width: 100% !important;text-align:center;}
.btn-primary:focus{box-shadow: 0 8px 9px -4px rgb(59 113 202 / 30%), 0 4px 18px 0 rgb(99 31 217 / 20%);}


//btn style
.btn{
    background: linear-gradient(151.85deg, #8E5AF1 0%, #5E19D6 100%);
    color: white;
    border-radius: 0px 35px 35px 35px !important;
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
    font-size:1em;
}

h1{
    font-weight: 900;
    text-align: center;
    text-transform: capitalize;
    color: #8C58F0;
}
`;

export default GlobalStyles;
