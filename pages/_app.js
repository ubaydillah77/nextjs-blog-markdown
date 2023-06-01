import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
// import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../components/Header";
import { Container } from "../components/Styled";
import { lightTheme, darkTheme, GlobalStyles } from "../themes/themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header toggle={toggleTheme} isTheme={theme} />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
    // <AnimatePresence>
    //   <motion.div
    //     key={router.route}
    //     initial="pageInitial"
    //     animate="pageAnimate"
    //     exit="pageExit"
    //     variants={{
    //       pageInitial: {
    //         opacity: 0,
    //       },
    //       pageAnimate: {
    //         opacity: 1,
    //       },
    //       pageExit: {
    //         opacity: 0,
    //       },
    //     }}
    //   >

    //   </motion.div>
    // </AnimatePresence>
  );
}

export default MyApp;
