import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from 'react-ga4';



const App = () => {
  // ReactGA.initialize(process.env.MEASURE_ID || '');
  console.log("process.env.MEASURE_ID:",process.env.MEASURE_ID);
  return (
    <>
      <Header />
      <main
        style={{
          height: "calc(100vh - 173px)",
          overflow: "auto",
          // padding: deviceType==='mobile'? '6px' :"20px",
        }}
      >
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
