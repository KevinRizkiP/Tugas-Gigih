import "./App.css";
import Home from "./pages/Home";
import { Route, Routes  } from "react-router-dom";
import { useSelector } from "react-redux";
import CreatePlaylistForm from "./components/CreatePlaylistForm";
import SearchGroup from "./pages/SearchGroup/SearchGroup";

function App() {
  const isAuthorize = useSelector((state) => state.auth.isAuthorize);
  return (
    <Routes>
      {!isAuthorize && <Route path="/" element={<Home />} />}
      {isAuthorize && (
        <>
          <Route path="/create-playlist" element={<CreatePlaylistForm />} />
          <Route path="/search" element={<SearchGroup />} />
        </>
      )}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
