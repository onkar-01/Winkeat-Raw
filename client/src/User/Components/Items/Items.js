import {React, useState ,useEffect} from "react";
import "./Items.css";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import { yellow } from "@mui/material/colors";
import { color } from "@mui/system";

const Items = (props) => {
  const { img, title, description, quantity,id
    // quantity, price 
  } = props;

  // new counter

  const [count, setCount] = useState(quantity); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  const[cartDataSpecific,setCartDataSpecific]=useState([])
  useEffect(() => {
      try {
        const fetchItData = async ()=>{
          await axios.get(`api/user/getcart`)
          .then((res)=>{
        
            setCartDataSpecific(res.data.cartItem.filter((item)=>item.itemId===id));
            // console.log(cartDataSpecific);
           
          })
          .catch((err) => {
            
        })
          
        }
        fetchItData();
        
      } catch (error) {
      }
    }, [cartDataSpecific]);

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
      if(prevCount<5)
        return (prevCount += 1);
        


      else
      return prevCount;
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } 
      else {
        return (prevCount = 0);
      }
    });
  }

  // new counter

  return (
    <>
      <div className="cart-items">
        <div
          className="cart-Body">
          <div className="cart-items-img">
            <img src={img} alt="not available" />
          </div>
          <div className="cart-items-details">
            <div className="cart-items-details-title">
              <h1>{title}</h1>
              <h4>Price: {description}</h4>
              <h4>Quantity: {quantity}</h4>
            </div>
          </div>
          {/* new */}
          <div className="counter-section">
            <button className="inc-btn only-inc" onClick={increment}>+</button>
            <h1 className="item-count-display">{count}</h1>
            <button className="dec-btn only-dec" onClick={decrement}>-</button>
            <DeleteIcon style={{color:"red", marginLeft:"40px", cursor:"pointer", width:"35px"}} />
          </div>

          {/* new */}
        </div>
      </div>
    </>
  );
};

export default Items;



