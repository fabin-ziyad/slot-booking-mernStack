// BookingSuccessPage.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const BookingSuccessPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/book-appointment");
    }, 5000);
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-sm w-full">
        <h1 className="text-3xl font-bold mb-4">Booking Successful!</h1>
        <p className="text-gray-700 mb-4">
          Thank you for booking. Your appointment has been confirmed.
        </p>
        <p className="text-sm">
          wait 3 seconds,Page will automatically redirect
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => navigate("/book-appointment")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default BookingSuccessPage;
