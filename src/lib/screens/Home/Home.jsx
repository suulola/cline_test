import React from "react";
import ArticleCard from "../../components/Article/ArticleCard";
import NavIconRow from "../../components/Nav/NavIconRow";

const Home = ({ resultCount = 30 }) => {
  return (
    <section className="bg-gray-100 w-100 md:flex px-4 py-3">
      <div className="section-1 flex flex-wrap md:block">
        <div className="flex justify-between mr-3 bg-gray-200 py-1 rounded px-2 w-48 h-9">
          <p className="text-md text-black">All</p>
          <p className="md text-gray-400">{resultCount} results</p>
        </div>
        <p className="md text-gray-400 mt-3 md:px-2">Images</p>
        <p className="md text-gray-400 mt-3 px-1 md:px-2">Videos</p>

        <div className="mt-4">
          <h5 className="text-sm text-gray-600 font-semibold mb-3">Sources</h5>
          <NavIconRow icon="/assets/images/academy.svg" title="Edtwsit" />
          <NavIconRow icon="/assets/images/google-dark.svg" title="Google" />
          <NavIconRow icon="/assets/images/youtube.svg" title="YouTube" />
          <NavIconRow icon="/assets/images/wiki.svg" title="WikiPedia" />
          <NavIconRow icon="/assets/images/khan.png" title="Khan Academy" />
          <NavIconRow
            icon="/assets/images/new-york.svg"
            title="New York Public Library"
          />
        </div>
      </div>
      <div className="section-2 mr-3">
        <div className="bg-white rounded-md border-purple-400 border-2 w-full px-3 flex items-center py-5 mb-3 overflow-hidden">
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
          <img src="/assets/images/search.svg" alt="search" className="h-20" />
        </div>
        <ArticleCard
          logo="/assets/images/new-york.svg"
          institution="New York Public Library"
          title="A Silicon Valley Adventure"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, minima temporibus ad quidem quos mollitia nam dicta nobis reiciendis rem dolorum aspernatur quibusdam fugit labore animi repellat maxime ex rerum?Saepe fugit, voluptate aliquam labore tempora fugiat reprehenderit laboriosam quisquam debitis exercitationem molestiae, atque odit corrupti animi, deleniti error unde consequuntur! Nulla ratione, blanditiis ex ea sequi aliquam minus cumque"
        />
      </div>
      <div className="section-3">
        <ArticleCard
          logo="/assets/images/khan.png"
          institution="Khan Academy"
          title="Late night Ideas"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          aspernatur, facilis velit quo at tempore, cumque ratione est impedit
          pariatur quae id nobis eaque mollitia porro aliquid quis ea? Nemo."
        />
        <div className="bg-white mt-4 w-100 px-3 py-2 min-h-24">
          <NavIconRow icon="/assets/images/youtube.svg" title="YouTube" />
          <iframe
            src="https://www.youtube.com/embed/yc_nRoMxee8"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            className="w-full overflow-hidden"
          />{" "}
        </div>
      </div>
    </section>
  );
};

export default Home;
