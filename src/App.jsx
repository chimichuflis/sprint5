//import { useState } from 'react'
import Footer from "./components/footer/Footer";
import HeaderContainer from "./components/header/HeaderContainer";
import MainContainer from "./components/main/MainContainer";
import NavContainer from "./components/nav/NavContainer";

function App() {
  return (
    <>
      <NavContainer />
      <HeaderContainer />
      <MainContainer />
      <Footer />
    </>
  );
}

export default App;
