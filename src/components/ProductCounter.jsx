import PropTypes from "prop-types";

export const ProductCounter = ({ count, increment, decrement }) => {
  return (
    <div className="product-counter">
      <span onClick={decrement} className="decrement">
        -
      </span>
      <span className="product-total-count">{count}</span>
      <span onClick={increment} className="increment">
        +
      </span>
    </div>
  );
};

ProductCounter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};
