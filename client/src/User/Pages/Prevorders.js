import React, { useState, useEffect } from "react";
import "../Styles/Prevorders.css";
import Sidebar from "../../Common/Components/Sidebar/Sidebar";
import orderData from "../OrderData";
import OrderCard from "../Components/Ordercard/OrderCard";
import Bottombar from "../Components/User-bottomBar/Bottombar";
const Prevorders = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    fetch("/api/user/getorders")
      .then((res) => res.json())
      .then((data) => {
        setOrderData(data.orderItem);
      });
  }, [orderData]);

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
        <h1 className="order-page-h1">Previous Orders</h1>
        {orderData.map(OrderCardInfo)}
      </div>
    </>
  );
};

export default Prevorders;
