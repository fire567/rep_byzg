import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
  }
  body {
    justify-content: center;
    font-family: 'Roboto';
    display: flex;
  }
  a {
    text-decoration: none;
    color: #4d4e4e;
    margin: 5px;
  
  }
`;
