import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap');
    body {
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container {
        width: 80%;
        margin: 0 auto;

        @media (max-width: 1000px) {
            width: 90%;
        }
    }

    .active {
       @media (max-width: 1100px) {
        
        transform: translateY(-500%) !important;
        transition: all 1s ease-in-out;
       }
    }

    h1,h2,h3,h4,h5,h6,p {
        margin: 0;
    }
`;
