import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <Header />
      <main
        style={{
          height: "calc(100vh - 173px)",
          overflow: "auto",
          padding: "20px",
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
