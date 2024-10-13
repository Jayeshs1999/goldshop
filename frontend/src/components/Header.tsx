import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/mh.png";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
// import { logout } from "../slices/authSlice";
// import useDeviceType from "../utils/DeviceType";

const Header = () => {
  const { userInfo } = useSelector((state: any) => state.auth);
  console.log("ui :", userInfo)
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();
  //  const logoutHandler = async () => {
  //    try {
  //      await logoutApiCall("").unwrap();
  //      dispatch(logout(""));
      
  //      navigate("/login");
  //    } catch (error) {
  //      console.log(error);
  //    }
  //  };
  
  return (
    <Navbar
      collapseOnSelect
      style={{ background: "whitesmoke" }}
      expand="lg"
      className=""
    >
      <Container>
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => {
            // setSelectedLink("");
            navigate("/");
          }}
        >
          <img src={logo} style={{ height: "100px" }} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {/* <>
              {!userInfo && (
                <Button
                  variant="outlined"
                  style={{
                    margin: deviceType === "mobile" ? "20px 20px" : "initial",
                  }}
                  color="primary"
                  onClick={() => {
                    setSelectedLink("history");
                    navigate("/login");
                  }}
                >
                  I am Sonar
                </Button>
              )}
            </> */}
            {/* {userInfo && (
              <NavDropdown
                style={{marginTop:deviceType==='mobile'? '10px':'initial'}}
                // title={<span>{userProfileVisibleLogic(userInfo?.name)}</span>}
                title={<span>{userInfo?.name}</span>}
                id="username"
              >
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/productList">
                  <NavDropdown.Item>Add your product</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
