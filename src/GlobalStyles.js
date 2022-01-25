import { createGlobalStyle } from 'styled-components';
import './fonts/fonts.css';

export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        font-family: 'Tomorrow', sans-serif;
        text-decoration: none;
    }
    
    body {
        margin: 0;
        width: 100vw;
        height: 100vh;
        font-size: 1rem;
    }

    ul {
        list-style: none;
        padding: 0;
    }
`;