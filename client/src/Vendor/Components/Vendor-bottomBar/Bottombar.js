import React from "react";
import { Link } from "react-router-dom";
import "./Bottombar.css";

const Bottombar = () => {
  return (
    <div>
      <div class="bottom_menu ">
        <ul class="menu">
          <li>
            <Link to="/vendor/home" class="card1">
              <span class="menu_icon">
                <i class="bx bxs-dashboard"></i>
              </span>
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/vendor/inventory" class="card1">
              <span class="menu_icon">
                <i class="bx bx-food-menu"></i>
              </span>
              <p>Inventory</p>
            </Link>
          </li>
          <li>
            <Link to="/vendor/setting" class="card1">
              <span class="menu_icon">
                <i class="bx bx-cog"></i>
              </span>
              <p>Settings</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bottombar;
