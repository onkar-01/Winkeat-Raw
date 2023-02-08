import React from "react";
import "./Items.css";

const Items = (props) => {
  const {
    img,
    title,
    description,
    // quantity, price
  } = props;

  return (
    <>
      <div className="cart-items">
        <div className="cart-Body">
          <div className="cart-items-img">
            <img src={img} alt="not available" />
          </div>
          <div className="cart-items-details">
            <div className="cart-items-details-title">
              <h1>{title}</h1>
              <h4>{description}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
