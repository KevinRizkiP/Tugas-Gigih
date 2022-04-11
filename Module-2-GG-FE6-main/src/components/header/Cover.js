import React from "react";

const Cover = ({
  ImagePlaylist,
  p1,
  AlbumName,
  ImageArtist,
  p2,
  date,
  tracks,
}) => {
  return (
    <div>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black from-pink-400 h-80 text-white p-8`}
      >
        <img
          className="h-52 w-52 shadow-2xl"
          src={ImagePlaylist}
          alt="PlaylisImg"
        />
        <div className="space-y-3">
          <p className="font-bold">{p1}</p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
            {AlbumName}
          </h1>
          <div className="flex items-center space-x-3">
            <img
              className="h-12 w-12 rounded-full"
              src={ImageArtist}
              alt="ArtistImg"
            />
            <p className="font-bold">{p2}</p>
            <p>.</p>
            <p className="font-bold">{date}</p>
            <p>.</p>
            <p className="font-bold">{tracks}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cover;
