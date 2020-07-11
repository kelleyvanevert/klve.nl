import { createGlobalStyle } from "styled-components";

export const CONTENT_BASE = "https://content.klve.nl";

export const theme = {
  colors: {},
};

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
  }

  html * {
    outline: none;
  }

  body {
    margin: 0;
    padding: 0;
    cursor: crosshair;
  }

  .wrap {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .wrapr {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1100px) {
    .wrapr {
      max-width: 950px;
    }
  }

  @media (min-width: 1300px) {
    .wrapr {
      max-width: 1100px;
    }
  }

  section {
    margin-top: 100px;
    position: relative;
  }

  html,
  body {
    -webkit-text-size-adjust: none;
    font-size: 15px;
  }

  body {
    font-family: adobe-caslon-pro, serif;
    color: #333;

    line-height: 160%;

    text-transform: none;

    &.dark-mode {
      background: #222;
      color: #ddd;
    }
  }

  h1 {
    position: relative;

    margin: 80px 0 40px 0;
    text-align: center;

    font-weight: bold;
    font-size: 22px;
    color: #000;
    line-height: 30px;

    text-transform: uppercase;
    letter-spacing: 1px;

    .dark-mode & {
      color: #fff;
    }
  }

  h1 strong {
    display: inline-block;
    position: relative;
  }

  p {
    margin: 20px 0;
  }

  a {
    color: #555;

    .dark-mode & {
      color: #888;
    }
  }

  main {
    a {
      margin: 0 1px;
      outline: 0px solid #eee;
      outline-offset: 2px;
      background: transparent;

      .dark-mode & {
        outline-color: #444;
      }
    }
    a:focus {
      outline-offset: 0;
      outline-width: 2px;
      background: #eee;

      .dark-mode & {
        background: #444;
      }
    }
  }
`;
