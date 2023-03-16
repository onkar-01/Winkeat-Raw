import React, { useState, useEffect } from "react";
import "../Styles/Login.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { message } from "antd";
const OtpPage = () => {
  const navigate = useNavigate();
  const [loader, setloader] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "ThankYou, Just wait we are redirecting you ",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Please enter your data correctly",
    });
  };
  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "Invalid Credentials",
    });
  };

  const [user, setUser] = useState({
    otp: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    setloader(true);
    e.preventDefault();
    const { otp } = user;
    let username = localStorage.getItem("userName");
    let mobile = localStorage.getItem("mobileNo");
    const res = await fetch("/api/user/signup/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp,
        username,
        mobile,
      }),
    });
    const data = await res.json();
    if (!data) {
      setloader(false);
      error();
    } else if (res.status === 400) {
      setloader(false);
      warning();
    } else if (res.status === 200) {
      setloader(false);
      success();
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

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
                <label htmlFor="otp">
                  Enter Your Otp Which is sended on..{user.mobileNo}
                </label>

                <input
                  type="text"
                  name="otp"
                  id="otp"
                  placeholder="Enter Your Otp"
                  autoComplete="off"
                  value={user.otp}
                  onChange={handleInput}
                />
              </div>
              {user.otp.length === 6 ? (
                loader ? (
                  <button
                    className="submit-btn-login_not submit-btn-login"
                    disabled
                  >
                    <CircularProgress color="inherit" size="1.5rem" />
                  </button>
                ) : (
                  <button className="submit-btn-login" onClick={postData}>
                    Submit
                  </button>
                )
              ) : (
                <button
                  className="submit-btn-login_not submit-btn-login"
                  disabled
                >
                  Submit
                </button>
              )}
            </form>

            <div className="form-footer">
              <div className="footer-top">
                <span>
                  Are You a <Link to="/vendor/login">Vendor</Link> ?
                </span>
                <br />
                <span>
                  <Link>Forgot Your Password?</Link>
                </span>
                <br />
                <span>
                  <Link>Contact Us</Link>
                </span>
              </div>
              <div className="footer-bottom">
                Didn't have an account?
                <Link to="/register" className="Links">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpPage;
