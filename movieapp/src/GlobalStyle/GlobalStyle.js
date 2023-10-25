import {createGlobalStyle} from 'styled-components'

const backgroundAndColor = (theme) => {
  return `
    background-color: ${theme == 'light' ? '#F5F5F5' : '#333333'};
    color: ${theme == 'light' ? '#000000' : '#F5F5F5'}
    transition: all .3s ease-in-out;
  `;
}

export const GlobalStyle = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  .thisYear {
    background-color: red;
  }
`;

// ${({theme}) => backgroundAndColor(theme)}