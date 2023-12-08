import React, { useState, useEffect } from "react";
import ConfirmAppointment from "../components/Booking/confirm";
import { getDoctor } from "../Actions/adminActions";
import AppointConfirm from "../components/Appoinment/AppointConfirm";
import HomePage from "../components/Home/layout";

const ConfirmBooking = () => {
  const [doctor, setDoctor] = useState({});
  const fetchDoctor = async (id) => {
    try {
      const res = await getDoctor(id); 
      setDoctor(res.data);
    } catch (error) {
      console.error("Error fetching doctor data: ", error);
    }
  };
  useEffect(() => {
    fetchDoctor("657031d5890cc1e3e9d7f620");//for now directly passing id
  }, []);
  return (
    <HomePage>
      <div className="lg:px-[10%] bg-white">
        <div className="flex justify-center ">
          <div>
            {Object.keys(doctor).length > 0 && (
              <ConfirmAppointment props={doctor} />
            )}
            <AppointConfirm doc={doctor} />
          </div>
        </div>
      </div>
    </HomePage>
  );
};

export default ConfirmBooking;
