import React from "react";
import { Link } from "react-router-dom";
import "./Bottombar.css";

const Bottombar = () => {
  return (
    <div class="user">
      <div class="bottom_menu ">
        <ul class="menu">
          <li>
            <Link to="/home" class="card1">
              <span class="menu_icon">
                <i className="bx bx-home"></i>
              </span>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/user" class="card1">
              <span class="menu_icon">
                <i className="bx bx-user"></i>
              </span>
              <p>User</p>
            </Link>
          </li>
          <li>
            <Link to="/Prevorders" class="card1">
              <span class="menu_icon">
                <i className="bx bx-cart-alt"></i>
              </span>
              <p>Previous Orders</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bottombar;
