import React, { useState,useEffect } from "react";
import "../Styles/Login.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import {message} from 'antd';
const Login = () => {
  const navigate = useNavigate();
  const[loader,setloader]=useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'ThankYou, Just wait we are redirecting you ',
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Please enter your data correctly',
    });
  };
  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'Invalid Credentials',
    });

  };
    useEffect (() => {
        try {
            fetch('/api/user/getdata',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            }).then(async (res) => {
                if(res.status === 200){
                  
                    navigate('/home');
                    const data = await res.json();
                    localStorage.setItem("user",data.userId)
                }else if(res.status === 401){
                    navigate('/login');
                    localStorage.setItem("user",false)
                }else if(res.status === 422){
                    navigate('/login');
                    localStorage.setItem("user",false)
                }
            })
        }
        catch (error) {
            navigate('/login');
            localStorage.setItem("user",false)
        }
    }, [navigate])

  const [user,setUser] = useState({
    mobileNo:"",password:""
  });
  let name,value;
  const handleInput=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
  }
  const postData=async (e)=>{
    setloader(true)
    e.preventDefault();
    const {mobileNo,password}=user;
    const res=await fetch("/api/user/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        mobileNo , password
      })
    });
    const data=await res.json();
   if(!data){
    setloader(false)
    error();
   }
    else if(res.status===400){
      setloader(false)
      warning();
    }
    else if (res.status===200){
      setloader(false)
      success();
      setTimeout(() => {
        navigate('/home');
    }, 3000);
      
    }
  }
  return (
    <>
    {contextHolder}
    <div className="login-body">
      <div className="content-box-login">
        <div className="logo-box">
          <img
            className="form-img-login"
            src="/images/phoneLogin.png"
            alt="not available"
          />
        </div>
        <div className="form-box-login">
          <div className="form-nav">
            <div className="arrow-icon">
            <Link to="/">
              <ArrowBackIcon className="arrow" />
            </Link>
            </div>
            <div>
            <img
              className="winkeat-logo-form"
              src="/images/winkeat-logo2.png"
              alt="not available"
            />

            </div>
          </div>

          <form action="">
            <div className="input-form-login">
              <input
                type="text"
                name="mobileNo"
                id="mobileNo"
                placeholder="Mobile Number"
                autoComplete="off"
                value={user.mobileNo}
                onChange={handleInput}
              />
            </div>
            <div className="input-form-login">
              <input 
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
              />
            </div>
            {
              user.mobileNo.length===10 && user.password.length>=8 ?
              loader ?
              <button className="submit-btn-login_not submit-btn-login" disabled><CircularProgress color="inherit" size="1.5rem" /></button>
              :
              <button className="submit-btn-login" onClick={postData}>Login</button>
              :
              <button className="submit-btn-login_not submit-btn-login" disabled>Login</button>

            }
          </form>

          <div className="form-footer">
          <div className="footer-top">
            <span>Are You a <Link to="/vendor/login">Vendor</Link> ?</span><br/>
            <span><Link>Forgot Your Password?</Link></span><br/>
            <span><Link>Contact Us</Link></span>
          </div>
          <div className="footer-bottom">
            Didn't have an account?<Link to="/register" className="Links">Sign Up</Link>
          </div>

          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
