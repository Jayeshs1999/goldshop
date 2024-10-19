import React from "react";
import { Link, useNavigate } from "react-router-dom";
import linkedIn from "../../assets/linkedin.png";
import Instagram from "../../assets/insta.png";
import youtube from "../../assets/youtube.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const ContactUs = () => {
    const navigate = useNavigate();
  const handleEmailClick = () => {
    window.location.href =
      "mailto:jayeshsevatkar55Gmail.com?subject=Hello&body=I%20would%20like%20to%20discuss...";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+918888585093"; // Replace with your actual phone number
  };

  return (
    <div className="p-3">
         <div
        className="mb-2"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          alignSelf: "start",
        }}
      >
        <ArrowBackIcon onClick={() => navigate("/")} />
        <h4 className="mb-0">Contact Us</h4>
      </div>
      <div className="mt-5">
        <h4>Email:</h4>
        <p>
          <Link to="#" onClick={handleEmailClick} style={{paddingLeft:'10px'}}>
            jayeshsevatkar55@gmail.com
          </Link>
        </p>
      </div>

      <div>
        <h4>Contact No:</h4>
        <Link
          to="#"
          onClick={handlePhoneClick}
          style={{ display: "block", margin: "10px 0",paddingLeft:'10px' }}
        >
          +918888585093
        </Link>
      </div>

      <div style={{display:'flex', justifyContent:'start',alignItems:'start',flexDirection:'column'}}>
        <h4 style={{alignSelf:'start'}}>Follow Us:</h4>
        <div style={{paddingLeft:'10px'}}>
        <div>
          <img src={youtube} alt="youtube" />
          <Link to="https://youtube.com/@maharashtrachyakushit?si=5uhW4uHwndGsrIsN">
            YouTube
          </Link>
        </div>

        <div>
          <img src={Instagram} alt="youtube" />
          <Link to="https://www.instagram.com/maharashtrachya_kushit?utm_source=qr&igsh=MXVxcmp6aTF3dTdreg==">
            Instagram
          </Link>
        </div>

        <div>
          <img src={linkedIn} alt="linkedin" />
          <Link to="https://linkedin.com/in/jayesh-sevatkar">LinkedIn</Link>
        </div>

        </div>

      </div>
    </div>
  );
};

export default ContactUs;
