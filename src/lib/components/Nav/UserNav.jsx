import React from "react";

const UserNav = ({ userData }) => {
  console.log(userData, '*******')
  return (
    <nav className="bg-gray-100 flex justify-between md:h-12 pb-2 items-center pt-3 flex-col md:flex-row">
      <div className="flex w-2/3 items-center mt-2 md:pr-20 w-full order-3 md:order-1">
        <img src={userData.imageUrl || "/assets/images/google.svg"} alt="logo" className="w-7 mx-3 rounded-2xl" />{" "}
        <div className="shadow flex flex-1 rounded">
          <input
            type="text"
            className="bg-gray-50 border-0 placeholder-gray-500 w-full rounded p-3 hover:border:0 h-10"
            placeholder="Search..."
          />
          <button className="bg-gray-50 w-auto flex justify-end items-center text-gray-500 p-2 hover:text-gray-700 rounded">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>{" "}
          </button>
        </div>
        <p className="text-gray-400 px-2 pr-4">Welcome {userData.name || "Anon"}</p>
      </div>
      <div className="flex mx-4 w-full justify-end mt-3 md:mt-2 pr-3 order-2">
        <img src="/assets/images/google.svg" alt="blazing" className="w-3" />
        <div className="bg-purple-400 text-white mx-3 text-center rounded-2xl h-7 w-7">
          +
        </div>
        <div className="bg-black text-white text-center rounded-2xl h-7 w-7 pt-1 text-sm">
          F
        </div>
      </div>
    </nav>
  );
};

export default UserNav;
