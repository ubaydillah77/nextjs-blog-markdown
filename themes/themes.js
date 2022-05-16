import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f4f4f4",
  card: "#f4f4f4",
  border: "2px solid #f4f4f4",
  fontColor: "#000",
  bodyColor: "#000",
};

export const darkTheme = {
  body: "#111111",
  card: "#000000",
  border: "2px solid #333",
  fontColor: "#f4f4f4",
  bodyColor: "#BEBEBE",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    transition: all .2s;
  }
`;
