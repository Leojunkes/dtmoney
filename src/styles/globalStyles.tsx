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
    --text: #969cb3;
    --blue: #5429cc;
    --green: #33cc95;
    --red: #e62e4d;
    --titulos: #e62e4d;
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
      font: 400 1rem 'inter', sans-serif;
    }
    body {
      color: var(--blue);
      background:var(--background)
    }
    button {
      cursor: pointer;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  
`;
