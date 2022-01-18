import { createGlobalStyle } from 'styled-components';
import './fonts/fonts.css';

export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        // padding: 0;
        // margin: 0;
        // font-family: 'Tomorrow', sans-serif;
    }

    body {
        margin: 0;
        width: 100vw;
        height: 100vh;
        position: absolute;
    }
`;