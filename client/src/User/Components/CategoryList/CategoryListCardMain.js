import React from "react";
import "./CategoryList copy.css";

const CategoryListCardMain = (props) => {
  const {
    categoryName,
    image,
    // _id
  } = props;
  return (
    <>
      <div className="header-full-body">
        <div className="canteen-body-header">
          <div className="canteenacard">
            <div className="canteencard-img">
              <img
                className="main-canteen-card-img"
                // src="./images/pizza.png"
                src={image}
                alt="not available"
              />
            </div>
            <div className="canteena-card-title">{categoryName}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryListCardMain;
