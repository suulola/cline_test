import React from "react";

const NavIconRow = ({ icon, title }) => {
  return (
    <div className="flex mb-1 items-center">
      <img src={icon} alt={title} className="w-4 mr-3" />{" "}
      <p className="text-gray-500 text-sm">{title}</p>
    </div>
  );
};

export default NavIconRow;
