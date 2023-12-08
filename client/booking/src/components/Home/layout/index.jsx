import React from "react";
import Navbar from "../Navbar/Navbar";
import "./layout.css";
import { useLocation } from "react-router-dom";
const HomePage = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="homepage">
      <Navbar />
      <main
        className={`mt-[70px] px-0 ${
          pathname === "/confirm-appointment" ? "" : "lg:px-20 md:px-10"
        } `}
      >
        <div className="main-container">{children}</div>
      </main>
    </div>
  );
};

export default HomePage;
