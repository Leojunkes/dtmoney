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
    .react-modal-overlay{
      background:rgba();
      position:fixed;
      top:0;
      bottom:0;
      right:0;
      left:0;
      display:flex;
      align-items:center;
      justify-content:center;
    
    }
    .react-modal-content{
      width:100%;
      max-width:576px;
      background:var(--background);
      padding:3rem;
      position:relative;
      border-radius:0.25rem;
    }
  .react-modal-close{
    position:absolute;
    right:1.5rem;
    top:1.5rem;
    border:0;
    background:transparent;
    transition: filter 0.2s;

    &:hover{
      filter:brightness(0.8);
    }

  }
`;
