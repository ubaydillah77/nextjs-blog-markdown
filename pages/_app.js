import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "../components/Header";
import { Container } from "../components/Styled";
import { lightTheme, darkTheme, GlobalStyles } from "../themes/themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header toggle={toggleTheme} />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
