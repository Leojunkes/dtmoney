import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --shapeprincipal: #ffffff;
    --background: #f0f2f5;
    --gray-line: #dcdde0;
    --text-body: #969cb3;
    --blue-light: #6933ff;
    --blue: #5429cc;
    --green: #33cc95;
    --red: #e62e4d;
    --text-title:#363f5f;
  }
    @media (max-width: 1080px) {
      html {
        font-size: 93.75%;
      }
    }

    @media (max-width: 720px) {
      html {
        font-size: 87.5%;
      }
    }
    body,
    input,
    textarea,
    button {
      font-family :'Poppins', sans-serif;
      font-weight:400;
    }

    h1,h2,h3, h4, h5, h6, strong{
      font-weight:600;
    }

    body {
      
      background:var(--background);
      -webkit-font-smoothing:antialiased;
    }
    button {
      cursor: pointer;
    }

    [disabled]{
      opacity:0.6;
      cursor:not-allowed;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  
`;
