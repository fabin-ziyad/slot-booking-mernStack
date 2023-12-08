import React, { useEffect, useState } from "react";
import { CiClock1 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FaHouse } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { BsCameraVideoFill } from "react-icons/bs";
import FAQ from "../faq/Faq";
import { useLocation, useNavigate } from "react-router-dom";
import { formatTimeToAMPM, globalFormatDate } from "../../utils/common";
import { getLoggedUser } from "../../utils/auth/getCurrentUser";
import { createBooking } from "../../Actions/userActions";

const AppointConfirm = ({ doc }) => {
  const navigate = useNavigate();
  const [appointmentData, setAppointmentData] = useState({});
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const { data } = location.state || {};
  useEffect(() => {
    const getCurrentUser = async () => {
      console.log("entered");

      const user = await getLoggedUser();
      console.log(user);
      if (user.success) {
        setUser(user.data);
      } else {
        alert(user.message);
      }
    };
    if (Object.keys(data).length > 0) {
      setAppointmentData(data);
    }
    getCurrentUser();
  }, [data]);
  const objToServer = {
    slotData: { ...data },
    doctor: doc?._id,
    userId: user?._id,
  };
  console.log(objToServer);

  const handleBookingCreation = async () => {
    try {
      setIsLoading(true);
      const response = await createBooking(objToServer);
      if (response.success) {
        setIsLoading(false);
        navigate("/booking-success");
        alert(response.message);
      } else {
        setIsLoading(false);
        alert(response.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error creating booking: ", error);
    }
  };

  return (
    <div className="pt-6">
      {isLoading && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Loading...</h2>
          </div>
        </div>
      )}
      <h2 className="text-xl font-semibold">Appointment Summary</h2>
      <div className="flex justify-between my-6">
        <div className="flex gap-4">
          {data?.type === "In-Clinic" ? (
            <FaHouse size={25} className="text-green mt-1" />
          ) : data?.type === "Audio" ? (
            <MdCall size={25} className="text-green mt-1" />
          ) : (
            <BsCameraVideoFill size={25} className="text-green mt-1" />
          )}
          <div>
            <h2 className="text-lg font-semibold">{data?.type}</h2>
            <h2 className="text-lg my-2 text-green">Fees: Rs {data?.fees}</h2>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-3">
            <CiClock1 size={20} className="text-green" />
            <h2 className="text-lg">
              {formatTimeToAMPM(appointmentData.time)}
            </h2>
          </div>
          <div className="flex items-center gap-x-3">
            <SlCalender size={20} className="text-green" />
            <h2 className="text-lg my-2">
              {globalFormatDate(appointmentData.date)}
            </h2>
          </div>
        </div>
        <div>
          <h2
            className="text-blue text-semibold hover:cursor-pointer"
            onClick={() => navigate("/book-appointment")}
          >
            Change date & time
          </h2>
          <hr className="text-blue" />
        </div>
      </div>
      <div className="flex justify-end my-6">
        <button
          className="hidden lg:block border border-primary px-5 py-2 my-2 rounded font-semibold text-white bg-primary"
          onClick={handleBookingCreation}
        >
          CONTINUE
        </button>
      </div>
      <div className="w-full">
        <button
          className="block lg:hidden fixed bottom-0 w-full border border-primary px-5 py-2 font-semibold text-white bg-primary"
          onClick={handleBookingCreation}
        >
          CONTINUE
        </button>
      </div>
      <FAQ />
    </div>
  );
};

export default AppointConfirm;
