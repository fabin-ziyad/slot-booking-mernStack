import React from "react";
import './utils.css'
const Avatar = ({ firstName, lastName }) => {
  const initials = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;

  return (
    <div className="avatar">
      <span className="initials">{initials}</span>
    </div>
  );
};

export default Avatar;
