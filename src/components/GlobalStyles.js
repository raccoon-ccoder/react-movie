import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import BlackHanSansTTF from '../styles/fonts/BlackHanSans-Regular.ttf';

const GlobalStyles = createGlobalStyle`
    ${reset};
    @font-face {
        font-family: 'Black Han Sans';
        src: url(${BlackHanSansTTF}) format('truetype');
    }
    a {
        text-decoration: none;
        color: white;
    }
    body {
        background-color: black;
        color: white;
        font-family: 'Black Han Sans';
    }
    * {
    box-sizing: border-box;
    font-family: 'Black Han Sans';
    }
    :root{
        --light-gray: rgb(200 192 192);
    }
    `;
export default GlobalStyles;