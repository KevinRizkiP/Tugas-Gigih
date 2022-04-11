import React, { useEffect, useState } from "react";
import SearchBar from "../../header/SearchBar";
import Track from "../../contents/Track";

const SearchBarGroup = () => {
  const [tracks, setTracks] = useState([]);
  const [selectedTracksUri, setSelectedTracksUri] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [isInSearch, setIsInSearch] = useState(false);

  useEffect(() => {
    if (!isInSearch) {
      setTracks(selectedTracks);
    }
  }, [selectedTracksUri, selectedTracks, isInSearch]);

  const onSuccessSearch = (searchTracks) => {
    setIsInSearch(true);

    const selectedSearchTracks = searchTracks.filter((track) =>
      selectedTracksUri.includes(track.uri)
    );
    setTracks([...new Set([...selectedSearchTracks, ...searchTracks])]);
  };

  const clearSearch = () => {
    setTracks(selectedTracks);
    setIsInSearch(false);
  };

  const toggleSelect = (track) => {
    const uri = track.uri;

    if (selectedTracksUri.includes(uri)) {
      setSelectedTracksUri(selectedTracksUri.filter((item) => item !== uri));
      setSelectedTracks(selectedTracks.filter((item) => item.uri !== uri));
    } else {
      setSelectedTracksUri([...selectedTracksUri, uri]);
      setSelectedTracks([...selectedTracks, track]);
    }
  };

  return (
    <div className="w-full flex-grow">
      <SearchBar onSuccess={onSuccessSearch} onClearSearch={clearSearch} />

      <div className="px-5 mt-10">
        {tracks.length === 0 && <p>No Tracks</p>}

        <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-5 space-y-1 gap-5">
          {tracks.map((track) => (
            <Track
              key={track.id}
              imageUrl={track.album.images[0].url}
              title={track.name}
              artist={track.artists[0].name}
              select={selectedTracksUri.includes(track.uri)}
              toggleSelect={() => toggleSelect(track)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBarGroup;
