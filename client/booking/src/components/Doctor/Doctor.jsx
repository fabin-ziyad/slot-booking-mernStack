import React from "react";
import "./doctor.css";
const Doctor = ({doctor}) => {
  return (
    <div className="doctor-container px-1 lg:pl-6">
      <div className="flex gap-x-12 my-8">
        <img src="./doctor.svg" alt="doctorimg" className="doctorimg" />
        <div className="ml-6">
          <h2 className="text-xl font-semibold">{doctor.name}</h2>
          <h2 className="my-1">{doctor.speciality}</h2>
          <button className="border border-primary px-4 py-1 my-2 rounded font-semibold text-primary">VIEW PROFILE</button>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
