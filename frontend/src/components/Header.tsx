import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/mh.png";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import { logout } from "../slices/authSlice";
import useDeviceType from "../utils/DeviceType";

const Header = () => {
  const deviceType = useDeviceType();
  const { userInfo } = useSelector((state: any) => state.auth);
  console.log("ui :", userInfo);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
            <LinkContainer className="mb-2" to="/">
              <NavDropdown.Item className="mr-2">Home</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer className="mb-2" to="/ourPartner">
              <NavDropdown.Item className="mr-2">Our Partner</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer className="mb-2" to="/participantList">
              <NavDropdown.Item className="mr-2">Participant List</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer className="mb-2" to="/aboutUs">
              <NavDropdown.Item className="mr-2">About Us</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer className="mb-2" to="/ourChannel">
              <NavDropdown.Item className="mr-2">Our Channel</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer className="mb-2" to="/contactUs">
              <NavDropdown.Item className="mr-2">Contact Us</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer className="mb-2" to="/viewParticipantListSDDSDFFDFCZXADSsdfdfefdcsade12343234543">
              <NavDropdown.Item className="mr-2">Admin</NavDropdown.Item>
            </LinkContainer>


            {/* <NavDropdown
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
                
              </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
