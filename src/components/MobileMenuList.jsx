import PropTypes from "prop-types";

export const MobileMenuList = ({ hideMenu }) => {
  const list = ["Men", "Women", "About", "Contact"];
  const renderList = list.map((item, index) => <li key={index}>{item}</li>);
  return (
    <div className="menu-list">
      <svg className="close-icon"
        onClick={hideMenu}
        width="14"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fill="#69707D"
          fillRule="evenodd"
        />
      </svg>
      <p>Collections</p>
      <ul>{renderList}</ul>
    </div>
  );
};

MobileMenuList.propTypes = {
  hideMenu: PropTypes.func.isRequired,
};
