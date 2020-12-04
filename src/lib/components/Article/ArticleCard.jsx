import React from "react";

const ArticleCard = ({ logo, institution, title, description }) => {
  return (
    <>
      <div className="bg-white mb-3 w-full px-4 py-3 rounded">
        <div className="flex items-center mb-3">
          <img src={logo} alt="logo" className="w-8 mr-2" />
          <p className="text-gray-300 text-sm">{institution}</p>
        </div>
        <h4 className="text-black text-lg mb-1">{title}</h4>
        <p className="text-gray-500 text-justify text-sm">{description}</p>
        <div className="flex py-3 items-center">
          <p className="text-purple-300 text-sm">Repost</p>
          <p className="text-purple-300 mx-3">•</p>
            <p className="text-purple-300 text-sm mr-3">Share</p>
        </div>

        <div className="flex items-center">
          <div className="bg-black text-white text-center rounded-2xl h-7 w-7 pt-1 text-sm mr-3">
            F
          </div>
          <input
            type="text"
            className="bg-gray-100 border-0 placeholder-gray-300 placeholder-sm w-24 rounded-2xl h-9 p-3 focus:border:0 flex-1"
            placeholder="Add a comment"
          />
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
