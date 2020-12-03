import React from "react";

const NavIconRow = ({ icon, title }) => {
  return (
    <div className="flex mb-1">
      <img src={icon} alt={title} className="w-3 mr-4" />
      <p className="text-gray-500 text-sm">{title}</p>
    </div>
  );
};

export default NavIconRow;
