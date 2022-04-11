import React, { useState } from "react";
import PropTypes from "prop-types";
import { searchTrack } from "../../lib/Api";
import { useSelector } from "react-redux";
import { SearchIcon, XIcon } from "@heroicons/react/outline";

const SearchBar = ({ onSuccess, onClearSearch }) => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const [text, setText] = useState("");
  const [isClear, setIsClear] = useState(true);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await searchTrack(text, accessToken);

      const tracks = response.tracks.items;
      onSuccess(tracks);
      setIsClear(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleClear = () => {
    onClearSearch();
    setText("");
    setIsClear(true);
  };

  return (
    <div className="w-full flex mx-auto ">
      <form onSubmit={handleSubmit}>
        <div className="relative mt-1 p-3 rounded-md ">
          <div className="absolute inset-y-0 px-3 flex items-center pointer-events-none ">
            <SearchIcon className="h-10 w-10 text-black" />
          </div>
          <input
            type="text"
            placeholder="Artists, songs, or podcasts"
            required
            value={text}
            onChange={handleInput}
            className="bg-gray-50 block w-96 pl-16 h-16 rounded-full focus:outline-none focus:border-none text-xl text-black"
          />
          <div className="absolute bottom-0 top-0 right-0 pr-7 flex items-center z-10">
            {!isClear && (
              <XIcon className="h-10 w-10" onClick={handleClear}></XIcon>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired,
};
