import { createGlobalStyle } from "styled-components";

const backgroundAndColor = (theme) => {
  return `
    background-color: ${theme == "light" ? "#F5F5F5" : "#333333"};
    color: ${theme == "light" ? "#000000" : "#F5F5F5"};
    transition: all .3s ease-in-out;
  `;
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    ${({ theme }) => backgroundAndColor(theme)}
    font-family: 'Roboto', sans-serif;
    transition: all .3s ease-in-out;
  }

  a {
    text-decoration: none;
  }

  .thisYear {
    background-color: ${({theme}) => theme == 'light' ? '#F0F0F0' : '#232323'};
    transition: all .3s ease-in-out;
  }

  ::placeholder {
    font-size: .89rem;
    font-style: italic;
  }

  .nav-link {
    color: #000000;
    transition: all .3s ease-in-out;
  }

  .nav-link:hover {
    color: #BA49FF;
  }

  .form-control {
    &:focus {
      box-shadow: none;
      border: 1px solid #073d87;
    }
  }

  textarea {
    resize: none;
  }

  footer {
    background-color: ${({theme}) => theme == 'light' ? '#F0F0F0' : '#121212'};
  }
`;
