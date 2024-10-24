import PropTypes from "prop-types";
import ShoeImage from "../assets/images/image-product-1-thumbnail.jpg";

export const CartList = ({ cart, emptyCart }) => {
  console.log("state of cart:");
  return (
    <div className="cart-list-container">
      <div className="cart-list">
        <p className="text_bold px-1 py-2 cart-list-heading">Cart</p>
        <section className="px-1">
          {Object.keys(cart).length > 0 ? (
            <>
              <div className="text_gray flex align-center justify-space-between">
                <div className="cart-img-container">
                  <img
                    className="cart-product-img img_responsive"
                    src={ShoeImage}
                    alt=""
                  />
                </div>
                <div className="cart-info">
                  <p>{cart.itemName}</p>
                  <p>
                    <span>
                      ${cart.discountedPrice} &times; {cart.count}{" "}
                    </span>
                    <span className="text_bold text_dark">
                      ${cart.discountedPrice * cart.count}
                    </span>
                  </p>
                </div>
                <div>
                  <svg className="delete-icon"
                    onClick={emptyCart}
                    width="14"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <path
                        d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                        id="a"
                      />
                    </defs>
                    <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
                  </svg>
                </div>
              </div>
              <button className="flex align-center btn-primary">
                Checkout
              </button>
            </>
          ) : (
            <p className="text_center cart-empty">Your cart is empty.</p>
          )}
        </section>
      </div>
    </div>
  );
};

CartList.propTypes = {
  cart: PropTypes.object.isRequired,
  emptyCart: PropTypes.func.isRequired,
};
