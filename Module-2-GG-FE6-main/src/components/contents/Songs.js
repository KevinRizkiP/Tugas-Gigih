import React from "react";

const Songs = ({ Image, Title, order, artist, album }) => {
  return (
    <div className="grid grid-cols-2 text-gray-500 py-4 px-5 hover:bg-gray-900 ">
      <div className="flex items-center space-x-4">
        <p className="w-5">{order + 1}</p>
        <img className="h-12 w-12" src={Image} alt="ImageSong" />
        <div>
          <p className="w-36 lg:w-64 truncate text-white">{Title}</p>
          <p className="w-40">{artist}</p>
        </div>
      </div>
      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="">{album}</p>
      </div>
    </div>
  );
};
export default Songs;
