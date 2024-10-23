import PropTypes from "prop-types";
import { ProductCarouselMobile } from "./ProductCarouselMoble";
import { ProductInfo } from "./ProductInfo";
import { ProductCarouselDesktop } from "./ProductCarouselDesktop";

export const Product = ({ addToCart }) => {
  return (
    <div className="container">
      <main className="product-main-container">
        <ProductCarouselMobile />
        <ProductCarouselDesktop />
        <ProductInfo addToCart={addToCart} />
      </main>
    </div>
  );
};

Product.propTypes = {
  addToCart: PropTypes.func.isRequired,
};
