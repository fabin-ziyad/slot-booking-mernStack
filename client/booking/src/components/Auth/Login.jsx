import React, { useState } from "react";
import { login } from "../../Actions/userActions";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email === "") {
      return alert("Please enter email");
    } else if (formData.password === "") {
      return alert("Password is required");
    } else {
      try {
        const response = await login(formData);
        if (response && response.token) {
          localStorage.setItem("token", response.token);
          navigate("/book-appointment");
        }
      } catch (error) {
        console.error("Login failed", error);
        // Handle login error
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[60%] w-full space-y-8 bg-white py-12 px-8 rounded-lg">
        <h1 className="text-center text-2xl font-semibold">Login Page</h1>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
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

          <div className="flex items-center justify-end">
            <button className="bg-primary text-white px-3 py-1 rounded text-lg">
              Login
            </button>
          </div>
        </form>
        <p className="text-semibold text-lightGray">
          No Account ?{" "}
          <span className="text-primary" onClick={() => navigate("/register")}>
            Please Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
