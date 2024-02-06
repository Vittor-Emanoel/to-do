import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

   
  }
/* 
  :focus {
     outline: 0;
     box-shadow: 0 0 0 2px  ${(props) => props.theme["green-500"]} ;
  } */

  body {
    background-color: ${(props) => props.theme["bg"]};
    color: ${(props) => props.theme["gray-700"]};
    -webkit-font-smoothing: antialiased ;
  }

  body, input, textarea, button {
    font: 400 1rem Helvetica Neue,Helvetica,Arial,sans-serif, sans-serif;
    font: 14px ;
  }

`;