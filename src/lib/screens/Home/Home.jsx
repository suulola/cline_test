import React from "react";
import ArticleCard from "../../components/Article/ArticleCard";
import NavIconRow from "../../components/Nav/NavIconRow";

const Home = ({ resultCount = 30 }) => {
  return (
    <div>
      <nav className="flex justify-between h-12 mb-2 items-center">
        <div className="flex w-2/3 items-center mt-2 pr-20">
          <img
            src="/assets/images/google.svg"
            alt="logo"
            className="w-5 mx-3"
          />{" "}
         
          <div className="shadow flex flex-1 rounded">
          <input
            type="text"
            className="bg-gray-100 border-0 placeholder-gray-500 w-full rounded p-3 hover:border:0 h-10"
            placeholder="Search..."
          />
            <button className="bg-gray-100 w-auto flex justify-end items-center text-gray-500 p-2 hover:text-gray-700 rounded">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w-4 h-4"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>{" "}
            </button>
          </div>
          <p className="text-gray-200 px-2">Help</p>
        </div>
        <div className="flex mx-4 mt-2">
          <img src="/assets/images/google.svg" alt="blazing" className="w-3" />
          <div className="bg-purple-400 text-white mx-3 text-center rounded-2xl h-7 w-7">
            +
          </div>
          <div className="bg-black text-white text-center rounded-2xl h-7 w-7 pt-1 text-sm">
            F
          </div>
        </div>
      </nav>
      <section className="bg-gray-100 w-100 flex px-4 py-3">
        <div className="section-1">
          <div className="flex justify-between mr-3 bg-gray-200 py-1 rounded px-2 w-48">
            <p className="text-md text-black">All</p>
            <p className="md text-gray-400">{resultCount} results</p>
          </div>
          <p className="md text-gray-400 mt-3 px-2">Images</p>
          <p className="md text-gray-400 mt-3 px-2">Videos</p>

          <div className="mt-4">
            <h5 className="text-sm text-gray-600 font-semibold mb-3">Sources</h5>
            <NavIconRow icon="/assets/images/google.svg" title="Edtwsit" />
            <NavIconRow icon="/assets/images/google.svg" title="Google" />
            <NavIconRow icon="/assets/images/google.svg" title="YouTube" />
            <NavIconRow icon="/assets/images/google.svg" title="WikiPedia" />
            <NavIconRow icon="/assets/images/google.svg" title="Khan Academy" />
            <NavIconRow icon="/assets/images/google.svg" title="New York Public Library" />
          </div>
        </div>
        <div className="section-2 mr-3">
          <div className="bg-white rounded-md border-purple-400 border-2 w-full px-3 flex items-center py-5 mb-3">
            <div>
              <p className="text-md text-black font-semibold">Search</p>
              <p className="text-sm text-gray-500 mb-2">
                Your home base for all your resources
              </p>
              <div className="flex items-center">
                <button className="px-5 py-1 bg-purple-400 text-white rounded-2xl text-sm mr-4">
                  Tour
                </button>
                <p className="text-purple-400 text-sm">Got it</p>
              </div>
            </div>
            <img src="/assets/images/search.svg" alt="search" className="h-20"  />
          </div>
          <ArticleCard
            logo="/assets/images/apple.svg"
            institution="New York Public Library"
            title="A Silicon Valley Adventure"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, minima temporibus ad quidem quos mollitia nam dicta nobis reiciendis rem dolorum aspernatur quibusdam fugit labore animi repellat maxime ex rerum?Saepe fugit, voluptate aliquam labore tempora fugiat reprehenderit laboriosam quisquam debitis exercitationem molestiae, atque odit corrupti animi, deleniti error unde consequuntur! Nulla ratione, blanditiis ex ea sequi aliquam minus cumque"
          />
        </div>
        <div className="section-3">
          <ArticleCard
            logo="/assets/images/google.svg"
            institution="Khan Academy"
            title="Late night Ideas"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          aspernatur, facilis velit quo at tempore, cumque ratione est impedit
          pariatur quae id nobis eaque mollitia porro aliquid quis ea? Nemo."
          />
          <div className="bg-white mt-4 w-100 px-3 py-2">
            <NavIconRow icon="/assets/images/google.svg" title="YouTube" />
            {/* <iframe src="" frameborder="0"></iframe> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
