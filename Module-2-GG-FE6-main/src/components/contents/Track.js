import React, { useState } from "react";
import PropTypes from "prop-types";

const Track = ({ imageUrl, title, artist, select, toggleSelect }) => {
  const [isSelected, setIsSelected] = useState(select);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  };

  return (
    <div className="rounded-xl bg-neutral-900 w-62 p-5 flex gap-5 hover:bg-neutral-700 w-full items-center">
      <div className="w-full">
        <img className="lg:h-52 lg:w-52 md:h-40 md:w-40" src={imageUrl} alt={title} />
      </div>
      <div className="w-full">
        <div className="space-y-1 h-42 mt-5 w-full">
          <div className="text-white space-y-1 text-left">
            <h3 className="lg:text-xl text-md font-bold">{title}</h3>
            <p className="lg:text-lg text-sm font-semibold text-gray-300 ">
              {artist}
            </p>
          </div>
        </div>
        <div className="text-white mt-10">
          <button
            className="justify-items-end rounded-full text-lg text-black font-bold tracking-wider bg-green-500 px-5 py-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-400 duration-300"
            onClick={handleToggleSelect}
          >
            {isSelected ? "Deselect" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Track;

Track.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  select: PropTypes.bool.isRequired,
};
