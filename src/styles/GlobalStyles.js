import { createGlobalStyle } from "styled-components";

/* eslint no-unused-expressions: 0 */
export default createGlobalStyle`

  * {
    outline: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.color.surface};
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    overscroll-behavior-y: none;
  }

  body.fontLoaded {
    font-family: sofia-pro, sans-serif;
  }

  div {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    position: relative;
  }

  #root {
    height: 100%;
  }

  button {
    font-family: inherit;
  }

  img {
      margin-bottom: 10px;
  }

  a {
      color: #1C1D1E;
      text-decoration: none;
  }

  a:hover {
      text-decoration: #1C1D1E;
  }

  a:active {
      color: #1C1D1E;
  }

  a:visited {
      color: #1C1D1E;
  }

  h1, h2, h3,
  h4, h5, h6 {
    margin: 0;
  }

  p,
  label {
    margin: 0;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;
