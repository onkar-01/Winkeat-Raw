import React, { useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Bottombar from "../Components/Vendor-bottomBar/Bottombar";
import "../Styles/Setting.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const logout = async () => {
    document.title = "Vendor";
    fetch("/api/vendor/signout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      res.json();
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
      navigate("/vendor/login");
      localStorage.setItem("vendor", false);
    });
  };
  return (
    <div className="setting-view">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      <Sidebar />
      <Bottombar />
      <div className="container-1">
        <div className="setting-container">
          <div className="setting">
            <span className="profile">Profile</span>
          </div>
        </div>
        <div className="setting-container" onClick={handleShow}>
          <div className="setting">
            <span className="profile">Change Password</span>
          </div>
        </div>
        <div className="setting-container" onClick={logout}>
          <div className="setting">
            <span className="profile">Logout</span>
          </div>
        </div>
        <Modal className="modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="modal-title">
              Change Your Password
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter The OTP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the OTP"
                  name="name"
                  //   value={updateStock}
                  //   onChange={(e) => setUpdateStock(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button variant="danger">Cancel</Button>
            <Button variant="warning" onClick={handleShow1}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal className="modal" show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title className="modal-title">
              Change Your Password
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter The OTP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the New Password"
                  name="name"
                  //   value={updateStock}
                  //   onChange={(e) => setUpdateStock(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Confirm the New Password"
                  name="name"
                  //   value={updateStock}
                  //   onChange={(e) => setUpdateStock(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button variant="danger">Delete</Button>
            <Button variant="warning">Update</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Setting;
