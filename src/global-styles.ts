import reset from "styled-reset";
import { injectGlobal } from "./typed-components";

// tslint:disable-next-line
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Maven+Pro');
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Maven Pro', sans-serif;
  }
  a {
    color:inherit;
    text-decoration:none;
  }
  input,
  button {
    &:focus,
    &:active{outline:none}
  }
`;
