import PropTypes from "prop-types";
import { ProductCarouselMobile } from "./ProductCarouselMoble";
import { ProductInfo } from "./ProductInfo";

export const Product = ({ addToCart }) => {
  return (
    <main>
      <ProductCarouselMobile />
      <ProductInfo addToCart={addToCart} />
    </main>
  );
};

Product.propTypes = {
  addToCart: PropTypes.func.isRequired,
};
