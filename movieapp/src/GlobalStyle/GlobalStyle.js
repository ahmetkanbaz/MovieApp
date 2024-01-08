import { createGlobalStyle } from "styled-components";

const bgColor = "#E7E7E7"

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

  .homeMovies {
    background-color: ${({ theme }) =>
      theme == "light" ? "#F0F0F0" : "#232323"};
    transition: all .3s ease-in-out;
  }

  .popularActors {
    background-color: ${({theme}) => theme == 'light' ? '#F7F7F7' : '#101010'};
    transition: all .3s ease-in-out;
  }

  nav {
    background-color: ${({ theme }) =>
      theme == "light" ? bgColor : "#232323"};
    transition: all .3s ease-in-out;
  }

  .navbar-brand {
    color: ${({ theme }) => (theme == "light" ? "#000000" : "#F5F5F5")};
    transition: all .3s  ease-in-out;
    gap: .88rem;
    &:hover {
      color: ${({ theme }) => theme == "dark" && "#BA49FF"};
      gap: 1.1rem;
    }
  }

  .nav-link,
  .nav-link > svg {
    color: ${({ theme }) => (theme == "light" ? "#000000" : "#F5F5F5")};
    transition: all .3s ease-in-out;
  }

  .nav-link:hover,
  .nav-link:hover > svg {
    color: #BA49FF;
  }

  .form-control {
    background-color: ${({ theme }) =>
      theme == "light" ? "#F0F0F0" : "#3E3E3E"};
    transition: all .3s ease-in-out;
    &:focus {
      box-shadow: none;
      border: 1px solid #073d87;
    }
    &::placeholder {
      font-size: .89rem;
      font-style: italic;
      color: ${({ theme }) => (theme == "light" ? "#101010" : "#E0E0E0")};
      transition: all .3s ease-in-out;
    }
  }

  textarea {
    resize: none;
  }

  footer {
    background-color: ${({ theme }) =>
      theme == "light" ? bgColor : "#121212"};
  }
`;
