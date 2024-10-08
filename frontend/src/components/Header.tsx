import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/mh.png";
import { useNavigate } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import useDeviceType from "../utils/DeviceType";
import { NavDropdown } from "react-bootstrap";
import { userProfileVisibleLogic } from "../utils/objects";

const Header = () => {
  const deviceType = useDeviceType()
  const { userInfo } = useSelector((state: any) => state.auth);
  console.log("ui :", userInfo)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedLink, setSelectedLink] = useState("");
  const [logoutApiCall] = useLogoutMutation();
   const logoutHandler = async () => {
     try {
       await logoutApiCall("").unwrap();
       dispatch(logout(""));
      
       navigate("/login");
     } catch (error) {
       console.log(error);
     }
   };
  
  return (
    <Navbar
      collapseOnSelect
      // style={{ backgroundImage: "linear-gradient(73deg,#529246,#efbd3b,#f681db,#bd45a6,#9c929d,#8023ba)" }}
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => {
            setSelectedLink("");
            navigate("/");
          }}
        >
          <img src={logo} style={{ height: "65px" }} alt="" />
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
