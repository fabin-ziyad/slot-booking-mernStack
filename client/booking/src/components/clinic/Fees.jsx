import React, { useEffect, useState } from "react";
import { FaHouse } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { BsCameraVideoFill } from "react-icons/bs";
const Fees = ({ props, onStateChange }) => {
  const { fees } = props;
  const [selected, setSelected] = useState(fees[0]);
  const handleItemClick = (itemId) => {
    const item = fees.filter((item) => item._id === itemId);
    setSelected(item[0]);
  };

  useEffect(() => {
    if (Object.keys(selected).length > 0) {
      onStateChange(selected?.type, selected?.fee);
    }
  }, [selected]);

  return (
    <div className="border-t border-slate">
      <div className="pl-6 mt-6 block lg:flex items-center justify-between">
        <div className="inline-block">
          <h1 className="text-2xl font-semibold my-2">Book Your Appointment</h1>
          <h1 className="text-lg text-lightGray">
            Select Your Consultation Type
          </h1>
          <h1 className="font-semibold text-green">
            Fess Approx ₹{selected?.fee}
          </h1>
          <h1 className="font-semibold text-blue">
            (Pay {selected?.type === "In-Clinic" ? "at Clinic" : "Online"})
          </h1>
        </div>
        <div className="flex justify-evenly gap-x-2 lg:gap-x-8 px-2 py-2 lg:px-6">
          {fees.map((item) => (
            <div
              className={`border border-slate p-3 rounded-lg hover:cursor-pointer w-[100px] ${
                selected?._id === item?._id ? "bg-green text-white" : ""
              }`}
              key={item?._id}
              onClick={() => handleItemClick(item?._id)}
            >
              <div className="flex justify-center order-last">
                {item?.type === "In-Clinic" ? (
                  <FaHouse size={35} />
                ) : item?.type === "Audio" ? (
                  <MdCall size={35} />
                ) : (
                  <BsCameraVideoFill size={35} />
                )}
              </div>
              <p className="font-semibold text-center">{item?.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fees;
