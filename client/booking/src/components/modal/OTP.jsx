import React from "react";

const OTPModal = ({
  showModal,
  setShowModal,
  handleOtpSubmit,
  handleChange,
    formData
}) => {
  const handleKeyPress = (e) => {
    const regex = /^[0-9\b]+$/; // Regex to allow only numbers and backspace (\b)
    if (!regex.test(e.key)) {
      e.preventDefault();
    }
  };
  return (
    <>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg p-8 mx-auto w-1/3 shadow-2xl border border-slate">
              <h2 className="text-2xl mb-4">Enter OTP</h2>
              <form onSubmit={handleOtpSubmit}>
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  placeholder="Enter OTP"
                  className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500 mb-4"
                  maxLength={4}
                  pattern="[0-9]*"
                  onKeypress={handleKeyPress}
                  inputMode="numeric"
                />
                <div className="flex justify-evenly  w-full gap-3">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 px-4 rounded-md"
                  >
                    Verify
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full bg-primary text-white py-2 px-4 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OTPModal;
