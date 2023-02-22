import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`

  //reset.css properties

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  //index.css properties

  *,
  :before,
  :after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  html,
  body {
    color: ${({ theme }) => theme.colors.baseColors.grayScaleA};
    background-color:${({ theme }) => theme.colors.baseColors.grayScaleC};

    min-height: 100%;

    font-family: ${({ theme }) => theme.fonts.fontFamily};

    font-size: 62.5%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  p,
  strong,
  input {
    font-size: ${({ theme }) => theme.fonts.body.textSize.m};
    line-height: ${({ theme }) => theme.fonts.body.textHeight.m} ;
    margin: 0;
  }

  input {
    font-family:${({ theme }) => theme.fonts.fontFamily};
    outline: none;
  }
`;
