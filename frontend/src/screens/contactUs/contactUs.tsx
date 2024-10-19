import React from "react";
import { Link } from "react-router-dom";
import linkedIn from "../../assets/linkedin.png";
import Instagram from "../../assets/insta.png";
import youtube from "../../assets/youtube.png";
const ContactUs = () => {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:jayeshsevatkar55Gmail.com?subject=Hello&body=I%20would%20like%20to%20discuss...";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+918888585093"; // Replace with your actual phone number
  };

  return (
    <div className="p-3">
      <div>
        <h2>Email:</h2>
        <p>
          <Link to="#" onClick={handleEmailClick} style={{paddingLeft:'10px'}}>
            jayeshsevatkar55@gmail.com
          </Link>
        </p>
      </div>

      <div>
        <h2>Contact No:</h2>
        <Link
          to="#"
          onClick={handlePhoneClick}
          style={{ display: "block", margin: "10px 0",paddingLeft:'10px' }}
        >
          +918888585093
        </Link>
      </div>

      <div style={{display:'flex', justifyContent:'start',alignItems:'start',flexDirection:'column'}}>
        <h2 style={{alignSelf:'start'}}>Follow Us:</h2>
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
