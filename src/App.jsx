//import { useState } from 'react'
import Footer from "./components/footer/Footer";
import HeaderContainer from "./components/header/HeaderContainer";
import MainContainer from "./components/main/MainContainer";
import NavContainer from "./components/nav/NavContainer";
import DevContainer from "./components/DevContainer.jsx";

function App() {
  return (
    <>
      <NavContainer />
      <HeaderContainer />
      <MainContainer />
      <Footer />
      <DevContainer />
    </>
  );
}

export default App;
