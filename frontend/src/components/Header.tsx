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
      expand="lg"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)",
        borderBottom: "1.5px solid #fda085",
        borderRadius: "0 0 18px 18px",
        padding: "0.5rem 0",
        transition: "background 0.3s",
      }}
    >
      <Container>
        <Navbar.Brand
          style={{
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <img src={logo} style={{ height: "100px" }} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* // ... existing code ... */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Use ms-auto to push nav to the right, align-items-center for vertical alignment */}
          <Nav
            className="ms-auto align-items-center"
            style={{ gap: "16px", display: "flex" }} // Added display: flex for gap to work
          >
            <LinkContainer className="mb-2" to="/">
              <NavDropdown.Item
                className="mr-2"
                style={{
                  fontWeight: 600,
                  color: "#1e293b",
                  borderRadius: "8px",
                  padding: "8px 18px",
                  margin: "0 4px",
                  transition: "background 0.2s, color 0.2s",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#fda085";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#1e293b";
                }}
              >
                Home
              </NavDropdown.Item>
            </LinkContainer>
            {/* ... rest of menu items unchanged ... */}
            <LinkContainer className="mb-2" to="/ourBlogs">
              <NavDropdown.Item
                className="mr-2"
                style={{
                  fontWeight: 600,
                  color: "#1e293b",
                  borderRadius: "8px",
                  padding: "8px 18px",
                  margin: "0 4px",
                  transition: "background 0.2s, color 0.2s",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#fda085";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#1e293b";
                }}
              >
                Blogs
              </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer className="mb-2" to="/ourPartner">
              <NavDropdown.Item
                className="mr-2"
                style={{
                  fontWeight: 600,
                  color: "#1e293b",
                  borderRadius: "8px",
                  padding: "8px 18px",
                  margin: "0 4px",
                  transition: "background 0.2s, color 0.2s",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#fda085";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#1e293b";
                }}
              >
                Our Partner
              </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer className="mb-2" to="/aboutUs">
              <NavDropdown.Item
                className="mr-2"
                style={{
                  fontWeight: 600,
                  color: "#1e293b",
                  borderRadius: "8px",
                  padding: "8px 18px",
                  margin: "0 4px",
                  transition: "background 0.2s, color 0.2s",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#fda085";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#1e293b";
                }}
              >
                About Us
              </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer className="mb-2" to="/contactUs">
              <NavDropdown.Item
                className="mr-2"
                style={{
                  fontWeight: 600,
                  color: "#1e293b",
                  borderRadius: "8px",
                  padding: "8px 18px",
                  margin: "0 4px",
                  transition: "background 0.2s, color 0.2s",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#fda085";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#1e293b";
                }}
              >
                Contact Us
              </NavDropdown.Item>
            </LinkContainer>
            {/* ... existing code ... */}
          </Nav>
        </Navbar.Collapse>
        {/* // ... existing code ... */}
      </Container>
    </Navbar>
  );
};

export default Header;
