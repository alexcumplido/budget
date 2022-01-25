import { createGlobalStyle } from 'styled-components';
import './fonts/fonts.css';

export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        font-family: 'Tomorrow', sans-serif;
        text-decoration: none;
        margin: 0;
        pagging: 0;
    }
    
    body {
        margin: 0;
        font-size: 1rem;
    }

    ul {
        list-style: none;
        padding: 0;
    }
`;