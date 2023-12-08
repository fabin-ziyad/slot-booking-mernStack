import React, { useState } from "react";
import OTPModal from "../modal/OTP";
import { register, sendOtp, verifyOtp } from "../../Actions/userActions";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    otp: "",
    isMailVerified: false,
  });
  const [showModal, setShowModal] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (formData.email === "") {
      return alert("Please enter email");
    }
    const response = await sendOtp(formData.email);
    if (response.success) {
      setShowModal(true);
    } else {
      alert("Something went wrong");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.firstName === "") {
      return alert("Please enter first name");
    } else if (formData.lastName === "") {
      return alert("Please enter last name");
    } else if (formData.email === "") {
      return alert("Please enter email");
    } else if (formData.phone === "") {
      return alert("Please enter phone");
    } else if (formData.password === "") {
      return alert("Password is required");
    } else {
      const response = await register(formData);
      console.log(response);
      if (response.success) {
        alert(response.message);
        navigate("/login");
      } else {
        alert(response.message);
      }
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: formData.email,
      otp: formData.otp,
    };
    const response = await verifyOtp(data);
    if (response.success) {
      setOtpVerified(true);
      setFormData({ ...formData, isMailVerified: true });
      setShowModal(false);
      alert(response.message);
    } else {
      alert(response.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[60%] w-full space-y-8 bg-white py-12 px-8 rounded-lg">
        <h1 className="text-center text-2xl font-semibold">Register Page</h1>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-6">
            {/* Not Using input reusable components for now */}
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500 pr-12"
              disabled={otpVerified}
            />
            {!otpVerified && (
              <button
                type="button"
                onClick={handleSendOtp}
                className="absolute inset-y-0 right-0 px-4 py-2 bg-indigo-600 text-secondary rounded-md"
              >
                Send Otp
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-6">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            />
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              className="bg-primary text-white px-3 py-1 rounded text-lg"
              disabled={otpVerified === false ? true : false}
            >
              Submit
            </button>
          </div>
        </form>
        <p className="text-semibold text-lightGray">
          Already Have an Account ?{" "}
          <span className="text-primary" onClick={() => navigate("/login")}>
            Please Login
          </span>
        </p>
      </div>

      {/* OTP Modal */}
      {showModal && (
        <OTPModal
          showModal={showModal}
          setShowModal={setShowModal}
          handleOtpSubmit={handleOtpSubmit}
          handleChange={handleChange}
          formData={formData}
        />
      )}
    </div>
  );
};

export default Register;
