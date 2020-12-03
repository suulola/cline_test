import React from "react";
import {Link} from 'react-router-dom';

const GuestNav = () => {
  return (
    <nav className="md:flex justify-between pt-5 h-auto mb-5">
      <div className="w-100 md:w-1/2  flex justify-center md:justify-end divide-x-2 divide-rose-400 divide-double">
        <Link
          to="/"
          className="text-gray-500 cursor transition ease-in duration-200 delay-75 transform hover:-translate-y-1 hover:scale-110 px-3"
        >
          Home
        </Link>
        <Link
          to="/"
          className="text-gray-500 cursor transition ease-in duration-200 delay-75 transform hover:-translate-y-1 hover:scale-110 px-3"
        >
          About
        </Link>
        <Link
          to="/"
          className="text-gray-500 cursor transition ease-in duration-200 delay-75 transform hover:-translate-y-1 hover:scale-110 px-3"
        >
          Contact Us
        </Link>
        <Link
          to="/"
          className="text-gray-500 cursor transition ease-in duration-200 delay-75 transform hover:-translate-y-1 hover:scale-110 px-3"
        >
          Help
        </Link>
      </div>
      <div className="pt-3 md:pt-0 w-100 md:w-1/2  flex justify-center">
        <Link
          to="/"
          className="px-5 py-1 md:bg-white text-gray-500 mx-2 md:rounded-2xl font-semibold md:border-r-2 border-b-2"
        >
          Register
        </Link>
        <Link
          to="/"
          className="px-3 py-1 bg-gray-50 text-gray-500 mx-2 border-b-2 border-blue-300"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default GuestNav;
