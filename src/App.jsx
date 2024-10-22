import { useState } from "react";
import "./App.css";
import { MobileMenuList } from "./components/MobileMenuList";
import { Nav } from "./components/Nav";
import { Product } from "./components/Product";
import { CartList } from "./components/Cart";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);

  const addToCart = (itemObj) => {
    setCart(itemObj);
  };
  const emptyCart = () => {
    console.log("hello");
    setCart({});
  };

  const toggleCartList = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };
  console.log(cart);
  // {
  //   item: "sneakers",
  //   price: 400,
  //   quantity: 1
  // }

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
      <Nav cart={cart} showMenu={showMenu} toggleCartList={toggleCartList} />
      {showCart ? (
        <CartList
          emptyCart={emptyCart}
          cart={cart}
          toggleCartList={toggleCartList}
        />
      ) : (
        ""
      )}
      {menuActive ? <MobileMenuList hideMenu={hideMenu} /> : ""}
      <Product addToCart={addToCart} />
    </>
  );
}

export default App;
