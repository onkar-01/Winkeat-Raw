import { React, useState, useEffect } from "react";
import "./Items.css";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { yellow } from "@mui/material/colors";
import { color } from "@mui/system";

const Items = ({ img, title, description, quantity, price, image }) => {
  // const {
  //   // quantity, price
  // } = props;

  // new counter
  // console.log(img);

  const [count, setCount] = useState(quantity); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  // const [cartDataSpecific, setCartDataSpecific] = useState([]);
  // useEffect(() => {
  //   try {
  //     const fetchItData = async () => {
  //       await axios
  //         .get(`api/user/getcart`)
  //         .then((res) => {
  //           setCartDataSpecific(
  //             res.data.cartItem.filter((item) => item.itemId === id)
  //           );
  //           // console.log(cartDataSpecific);
  //         })
  //         .catch((err) => {});
  //     };
  //     fetchItData();
  //   } catch (error) {}
  // }, [cartDataSpecific]);

  // const postData=async (e)=>{
  //   e.preventDefault();

  //   const res=await fetch("/api/user/signup/verify",{
  //     method:"POST",
  //     headers:{
  //       "Content-Type":"application/json"
  //     },
  //     body:JSON.stringify({
  //       id,
  //       quantity,
  //       mobile
  //     })
  //   });
  //   const data=await res.json();
  //  if(!data){
  //   setloader(false)
  //   error();
  //  }
  //   else if(res.status===400){
  //     setloader(false)
  //     warning();
  //   }
  //   else if (res.status===200){
  //     setloader(false)
  //     success();
  //     setTimeout(() => {
  //       navigate('/login');
  //   }, 3000);

  //   }
  // }
  function increment() {
    setCount(function (prevCount) {
      if (prevCount < 5) return (prevCount += 1);
      else return prevCount;
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  // <-------------------------------ADD AND REMOVE FROM CART------------------------------------------>

  const addtocart = async () => {
    console.log(img, quantity, price);
    const res = await axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      url: "/api/user/addtocartonebyone",
      data: {
        id: img,
        quantity: 1,
        price: price,
      },
    });
    console.log(res);
  };

  const removefromcart = async (id) => {
    console.log(img);
    const res = await axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      url: "/api/user/removefromcartonebyone",
      data: {
        id: img,
      },
    });
    console.log(res);
  };

  // new counter

  return (
    <>
      <div className="cart-items">
        <div className="cart-Body">
          <div className="cart-items-img">
            <img src={image} alt="not available" />
          </div>
          <div className="cart-items-details">
            <div className="cart-items-details-title">
              <h1>{title}</h1>
              <h4>Price: {price}</h4>
              <h4>Quantity: {quantity}</h4>
            </div>
          </div>
          {/* new */}
          <div className="counter-section">
            <button className="inc-btn only-inc" onClick={() => addtocart()}>
              +
            </button>
            <h1 className="item-count-display">{quantity}</h1>
            <button
              className="dec-btn only-dec"
              onClick={() => removefromcart()}
            >
              -
            </button>
            <DeleteIcon
              style={{
                color: "red",
                marginLeft: "40px",
                cursor: "pointer",
                width: "35px",
              }}
            />
          </div>

          {/* new */}
        </div>
      </div>
    </>
  );
};

export default Items;
