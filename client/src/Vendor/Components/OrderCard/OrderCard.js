import React from "react";
import "./Ordercard.css";

const OrderCard = (props) => {
  const {
    id,
    name,
    canteenName,
    orderStatus,
    quantity,
    price,
    image,
    paymentStatus,
  } = props;
  const acceptHandller = () => {
    fetch(`/api/vendor/order/accept/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    window.location.reload(true);
  };
  const rejectHandller = () => {
    fetch(`/api/vendor/order/reject/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    window.location.reload(true);
  };

  const completedHandller = () => {
    fetch(`/api/vendor/order/completed/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    window.location.reload(true);
  };

  const deliveredHandler = () => {
    fetch(`/api/vendor/order/delivered/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    window.location.reload(true);
  };

  const style = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <>
      <div className="order-card-body">
        <div className="card-img">
          <img className="card-img-img" src={image} alt="not available" />
        </div>
        <div className="item-info" style={style}>
          <div className="card-info">
            <h2>{name}</h2>
            <p>{canteenName}</p>
          </div>
          <div className="card-info">
            <h2>Quantity: {quantity}</h2>
            <p>Price: {price}</p>
          </div>
        </div>
        <div className="item-info" style={style}>
          <div className="card-status">
            <h3>Status</h3>
            <p>{orderStatus}</p>
          </div>
          <div className="card-status">
            <h3>Status</h3>
            <p>{paymentStatus}</p>
          </div>
        </div>
        {orderStatus === "pending" && (
          <div className="pre-order-activity">
            <button
              type="button"
              className="btn btn-success"
              onClick={acceptHandller}
            >
              Accept
            </button>
            <button
              type="button"
              className="btn btn-reject"
              onClick={rejectHandller}
            >
              Reject
            </button>
          </div>
        )}

        {orderStatus === "in progress" && (
          <div className="pre-order-activity">
            <button
              type="button"
              className="btn btn-success"
              onClick={completedHandller}
            >
              Completed
            </button>
          </div>
        )}
        {orderStatus === "completed" && (
          <div className="pre-order-activity">
            <button
              type="button"
              className="btn btn-success"
              onClick={deliveredHandler}
            >
              Delivered
            </button>
          </div>
        )}
        {orderStatus === "delivered" && (
          <div className="pre-order-activity">
            <p className="note">Your order is Delivered</p>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderCard;
