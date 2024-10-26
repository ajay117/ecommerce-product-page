import PropTypes from "prop-types";
import Avatar from "../assets/images/image-avatar.png";

export const Nav = ({ showMenu, cart, toggleCartList }) => {
  const totalProducts = cart.count;

  const list = ["Men", "Women", "About", "Contact"];
  const renderList = list.map((item, index) => <li key={index}>{item}</li>);

  return (
    <nav className="px-1">
      <div className="flex-container">
        <div className="menu-icon">
          <svg
            onClick={showMenu}
            width="16"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
              fill="#69707D"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <p className="brandname">sneakers</p>
        <div className="nav-menu-list">
          <ul>{renderList}</ul>
        </div>
      </div>

      <div className="flex-container align-center">
        <div id="cart">
          {totalProducts ? (
            <p className="cart-total-products">{totalProducts}</p>
          ) : (
            ""
          )}
          <svg
            onClick={toggleCartList}
            className="cart"
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fillRule="nonzero"
            />
          </svg>
        </div>
        <img src={Avatar} alt="user avatar" />
      </div>
    </nav>
  );
};

Nav.propTypes = {
  showMenu: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired,
  toggleCartList: PropTypes.func.isRequired,
};
