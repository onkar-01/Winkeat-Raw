import ArrowBack from '@mui/icons-material/ArrowBack';
import '../Styles/Cart.css'
import React,{useState,useEffect} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Items from "../Components/Items/Items.js";
import { Scrollbars } from "react-custom-scrollbars";
import axios from 'axios';
import { Link } from "react-router-dom";
import MediaQuery from 'react-responsive'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    border: '1px solid #5a5a5a',
    fontSize: 16,
    backgroundColor: '#ffd56a',
    padding: '15px 15px 15px 10px',
    boxShadow: 'inset 0px 4px 4px rgba(0, 0.15, 0, 0.15)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: "black",
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));
const Cart = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const[cartData,setCartData]=useState([])
  useEffect(() => {
      try {
        const fetchItData = async ()=>{
          await axios.get(`api/user/getcart`)
          .then((res)=>{
            console.log("abayega data2");
            setCartData(res.data.cartItem);
            console.log(cartData);
          })
          .catch((err) => {
            
        })
          
        }
        fetchItData();
        
      } catch (error) {
      }
    }, [cartData]);

  return (
    <div>

    <div className="cartcontainer">
      <MediaQuery query="(min-width: 1224px)">
        <div className="leftcontainer">
          <div className="cart-navbar">
            <div className="cart-navbar-arrowicon">
              <Link to={"/CanteenPage"}>
              <ArrowBack />
              </Link>
            </div>
            <div className="cart-title">
              <h1>My Cart</h1>
              <p className="total-itmes">
                Items in Cart: <span className="total-items-count"></span>
              </p>
            </div>
          </div>
          
          {/* <div className="lables">
          <ul class="lableBar">
              <li id='lable1'>Item</li>
              <li id='lable2'>Item Details</li>
              <li id='lable3'>Quantity</li>
              <li id='lable4'>Price</li>

            </ul>
          </div> */}
          <Scrollbars>
            <div className="cart-body">
              {
                cartData.map((item)=>{
                  return(
                    <Items
                    key={item.itemId}
                    img={item.itemImage}
                    title={item.itemName}
                    description={item.itemTotal}
                    quantity={item.itemQuantity}
                    price={item.itemPrice}
                    total={item.itemTotal}
                  />
                  )
                }
                )
              }
            </div>
          </Scrollbars>
        </div>
        <div className="rightcontainer">
          <div className="textArea">
            <div className="firstarea">
               Order Details
            </div>
            <div className="secondarea">
             <h4>
               SubTotal
               <span>
                  Rs.0
               </span>
              </h4> 

               
            </div>
            <div className="thirdarea">
            <FormControl  className="FormControl1">
        <InputLabel id="demo-simple-select-label">DineIn/Packaging</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="DineIn/Packaging"
          onChange={handleChange}
        >
          <MenuItem value={"DineIn"}>DineIn</MenuItem>
          <MenuItem value={"Packaging"}>Packaging</MenuItem>
        </Select>
      </FormControl>
              </div>
              <div className="fourtharea">
               
              <FormControl sx={{ ml: 11 }} variant="standard" >
                <InputLabel htmlFor="demo-customized-textbox">Promo Code</InputLabel>
                <h6><br/></h6>
                <BootstrapInput  id="demo-customized-textbox" placeholder="Promo Code" />
              </FormControl>
              </div>
              <hr />
              <div className="fiftharea">
              <h2>
                Total 
                <span>
                   Rs.0
                </span>
              </h2>
              </div>

            <div className="lastArea">
            <div className="proceedtopay-btn">
              <button className="proceed-to-payment-btn">
                Proceed to Payment <ShoppingCartIcon />
              </button>
            </div>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-width: 1224px)">
        <div className="topContainer">
          <div className="cart-navbar">
            <div className="cart-navbar-arrowicon">
              <Link to={"/CanteenPage"}>
              <ArrowBack />
              </Link>
              </div>
            <div className="cart-title">
              <h1>My Cart</h1>
              <p className="total-itmes">
                Items in Cart: <span className="total-items-count"></span>
              </p>
              </div>
              </div>
              <div className="cart-body-Mobile">
              {
                cartData.map((item)=>{
                  return(
                    <Items
                    key={item.itemId}
                    img={item.itemImage}
                    title={item.itemName}
                    description={item.itemTotal}
                    quantity={item.itemQuantity}
                    price={item.itemPrice}
                    total={item.itemTotal}
                  />
                  )
                }
                )
              }
            </div>
          </div>
          <div className="middleContainer">

            <div className="firstAreaMobile">
            <FormControl  className="FormControl1Mobile">
        <InputLabel id="demo-simple-select-label">DineIn/Packaging</InputLabel>
        <Select

          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="DineIn/Packaging"
          onChange={handleChange}
        >
          <MenuItem value={"DineIn"}>DineIn</MenuItem>
          <MenuItem value={"Packaging"}>Packaging</MenuItem>
        </Select>
      </FormControl>
              </div>
              <div className="secondAreaMobile">
              <FormControl sx={{ ml: 11 }} variant="standard" className='FormControl2Mobile' >
                <InputLabel htmlFor="demo-customized-textbox">Promo Code</InputLabel>
                <h6><br/></h6>
                <BootstrapInput  id="demo-customized-textbox" placeholder="Promo Code" />
              </FormControl>
              </div>
              <div className="thirdAreaMobile">
              <h2>
                Total
                <span>
                    Rs.0
                </span>
              </h2>
              </div>


              <div className="fourthareaMobile">
                <hr id="hrTag"/>

                </div>
                </div>
          <div className="BottomArea">
            </div>
          </MediaQuery>

    </div>
    
            </div>
  )
}

export default Cart