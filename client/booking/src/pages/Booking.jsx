import React, { useEffect, useState } from "react";
import HomePage from "../components/Home/layout";
import Doctor from "../components/Doctor/Doctor";
import Fees from "../components/clinic/Fees";
import ClinicAddress from "../components/clinic/ClinicAddress";
import ShowDates from "../components/Appoinment/ShowDates";
import FAQ from "../components/faq/Faq";
import { getDoctor } from "../Actions/adminActions";

const Book = () => {
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
    fetchDoctor("657031d5890cc1e3e9d7f620");  //for now im directly passing id
  }, []);

  const [fees, setFees] = useState(0);
  const [type, setType] = useState("");

  const handleChildStateChange = (type, fees) => {
    console.log("newState", type, fees);
    setFees(fees);
    setType(type);
  };
  return (
    <HomePage>
      <div className="Main-container">
        {Object.keys(doctor).length > 0 && <Doctor doctor={doctor} />}
        {Object.keys(doctor).length > 0 && (
          <Fees props={doctor} onStateChange={handleChildStateChange} />
        )}
        {Object.keys(doctor).length > 0 && <ClinicAddress props={doctor} />}
        <div className="mt-12">
          {Object.keys(doctor).length > 0 && (
            <ShowDates slots={doctor.slots.slots} type={type} fees={fees} />
          )}
        </div>
        <div className="mt-6">
          <FAQ />
        </div>
      </div>
    </HomePage>
  );
};

export default Book;
