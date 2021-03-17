import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    }

    *, *:before, *:after {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        line-height: 1;
        font-family: 'Roboto', sans-serif;
        color: #463F3A;
        background-color: #F4F3EE;
        font-smooth: always;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: all 0.50s linear;

        &::-webkit-scrollbar {
            width: 12px;
            background-color: #f6f6f2;

            border-radius: 15px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #c4c4c4;
            border-radius: 16px;
        }
    }

    ul {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }

    h1, h2, h3, p {
        margin: 0;
        padding: 0;
    }

    a, button {
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: #fff;
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
    }

`;
