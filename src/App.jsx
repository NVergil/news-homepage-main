// import React from "react";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import GridContainer from "./components/GridContainer";
import MenuMobile from "./components/MenuMobile";
import HeaderDesktop from "./components/HeaderDesktop";

const App = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleRezise = () => {
      if (window.innerWidth <= 768) {
        setMenu(true);
      } else {
        setMenu(false);
      }
    };
    window.addEventListener("resize", handleRezise);

    const mql = window.matchMedia("(max-width: 768px)");

    if (mql.matches) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  }, []);

  return (
    <>
      {menu && <MenuMobile styles="mob-links" />}
      <main>
        <section className="container">
          <header className="header-container">
            <img className="logo" src="/logo.svg" alt="" />
            {!menu && <HeaderDesktop styles="desk-links" />}
          </header>
          <GridContainer />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;
