import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import "../Styles/Prevorders.css";
import OrderCard from "../Components/Ordercard/OrderCard";
import Bottombar from "../Components/Vendor-bottomBar/Bottombar";
const Prevorders = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    fetch("/api/user/getorders")
      .then((res) => res.json())
      .then((data) => {
        setOrderData(data.orderItem);
      });
  }, []);

  console.log(orderData);

  function OrderCardInfo(orderData) {
    const {
      itemName,
      vendorName,
      productStatus,
      itemQuantity,
      itemPrice,
      itemImage,
    } = orderData;
    return (
      <OrderCard
        name={itemName}
        canteenName={vendorName}
        orderStatus={productStatus}
        postOrderActivity="Download Invoice"
        quantity={itemQuantity}
        price={itemPrice}
        image={itemImage}
      />
    );
  }

  return (
    <>
      <div className="order-container">
        <Sidebar />
        <Bottombar />
        <h1 className="vendor-order-page-h1">All Orders</h1>
        {orderData.map(OrderCardInfo)}
      </div>
    </>
  );
};

export default Prevorders;
