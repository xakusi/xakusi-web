import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import StateProvider from "../context/StateProvider";
import stateReducer, { initialState } from "../context/stateReducer";

function MyApp({ Component, pageProps }) {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <StateProvider reducer={stateReducer}>
        <Navbar openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
        <Component {...pageProps} openNavbar={openNavbar} />
      </StateProvider>
    </ThemeProvider>
  );
}

export default MyApp;
