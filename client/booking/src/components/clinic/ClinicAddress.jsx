import React from "react";
import "./clinic.css";
const ClinicAddress = ({ props }) => {
  
  return (
    <div className="pl-6 mt-16">
      <h1 className="text-2xl font-semibold my-2">{props?.clinic}</h1>
      <div className="flex items-center gap-1 pl-6 mt-6">
        <div className="outer-circle">
          <div className="inner-circle"></div>
        </div>
        <div>
          <h1 className="text-lg">
            {props?.clinicAddress}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ClinicAddress;
