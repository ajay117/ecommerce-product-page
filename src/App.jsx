import { useState } from "react";
import "./App.css";
import { MobileMenuList } from "./components/MobileMenuList";
import { Nav } from "./components/Nav";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const showMenu = () => {
    if (!menuActive) {
      // let menuList = document.querySelector(".menu-list");
      setMenuActive(true);
    }
  };

  const hideMenu = () => {
    if (menuActive) {
      setMenuActive(false);
    }
  };
  return (
    <>
      <Nav showMenu={showMenu} />
      {menuActive ? <MobileMenuList hideMenu={hideMenu}/> : ""}
    </>
  );
}

export default App;
