import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import Book from "../../../assets/book.png";
import c1 from '../../../assets/c1.jpeg';
import c2 from '../../../assets/c2.jpeg';
import c3 from '../../../assets/c3.jpeg';
import c4 from '../../../assets/c4.jpeg';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const OurPartner = () => {
  const navigate = useNavigate();
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
        <h2 className="mb-0">Our Partner</h2>
      </div>
      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ alignSelf: "start", fontSize:'20px', fontWeight:'bold' }}>1.</div>
          <img src={Book} style={{ height: "100px" }} alt="book" />
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>
            BookBucket.Com
          </div>
          <div>
            <Link to={"https://www.bookbucket.in/"}>
              https://www.bookbucket.in/
            </Link>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ alignSelf: "start",fontSize:'20px', fontWeight:'bold' }}>2.</div>
          <img src={c1} style={{ width:'100%' }} alt="book" />
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          Chai Gossips
          </div>
          <img src={c2} style={{ width:'82%' }} className="pt-4" alt="book" />
          <img src={c3} style={{ width:'82%' }} className="pt-4" alt="book" />
          <img src={c4} style={{ width:'82%' }} className="pt-4" alt="book" />
          <div className="pt-2" style={{fontSize:'24px',color:'blue'}}>
            <LocationOnIcon  />
            <Link to={"https://maps.app.goo.gl/yHs9aFwUc9pmmVps8"}>Shop Location</Link>
          </div>

        </div>

        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ alignSelf: "start" }}>2.</div>
          <img src={c2} style={{ width:'100%' }} alt="book" />
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          Chai Gossips
          </div>
        </div> */}
        <div></div>
      </div>
    </div>
  );
};

export default OurPartner;
