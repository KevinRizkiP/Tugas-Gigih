import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import Track from "../../components/Track";

export default function SearchGroup() {
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
    <div>
      <SearchBar onSuccess={onSuccessSearch} onClearSearch={clearSearch} />

      <div className="content">
        {tracks.length === 0 && <p>No tracks</p>}

        <div className="tracks">
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
}
