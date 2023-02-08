import React from "react";
import Navbar from "../../Common/Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import Bottombar from "../Components/Vendor-bottomBar/Bottombar";


const VendorDashboard = () => {
  return (
    <>
      <Sidebar />
      {/* <Navbar /> */}
      <Bottombar />
      <div className="order-card"></div>
    </>
  );
};

export default VendorDashboard;
