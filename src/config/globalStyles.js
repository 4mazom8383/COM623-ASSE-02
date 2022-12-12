import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Montserrat:wght@400;700&display=swap');
*{font-family: 'Montserrat', sans-serif;color: white;list-style: none;}

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


p::before{content: inherit !important;}
.card{background-color: inherit!important;}

#Second_Card{background: linear-gradient(151.85deg, #10C9F9 0%, #006AC4 100%) !important}
#second_review_card{margin-bottom: 20vh;}

.dropdown{margin-right:5vw;margin-top:5vh;}.dropdown-menu.show{width: 100% !important;text-align:center;}

.btn-primary:focus{box-shadow: 0 8px 9px -4px rgb(59 113 202 / 30%), 0 4px 18px 0 rgb(99 31 217 / 20%);}


`;

export default GlobalStyles;
