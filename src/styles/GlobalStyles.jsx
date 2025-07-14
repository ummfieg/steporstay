import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after{
    box-sizing: border-box;
}

@font-face {
    font-family: 'SUIT-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

body {
    margin: 0 auto;
    width: 600px;
    min-height: 100vh;
    font-family:'SUIT-Regular';
    background-color: #f9f9f9;
}
`;

export default GlobalStyle;
