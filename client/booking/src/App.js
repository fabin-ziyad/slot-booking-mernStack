import React from "react";
import { Route, Routes } from "react-router-dom";
import Book from "./pages/Booking";
import ConfirmBooking from "./pages/confirmBooking";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import BookingSuccessPage from "./pages/BookingSuccess";


const App = () => {
  return (
    <Routes>
      <Route path="/book-appointment" exact element={<Book />} />
      <Route path="/confirm-appointment" exact element={<ConfirmBooking />} />
      <Route path="/register" exact element={<RegisterPage />} />
      <Route path="/login" exact element={<LoginPage />} />
      <Route path="/booking-success" exact element={<BookingSuccessPage />} />
    </Routes>
  );
};

export default App;
