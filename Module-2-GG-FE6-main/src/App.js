import Login from "./components/pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchGroup from "./components/pages/content/SearchGroup";
import Sidebar from "./components/sidebar/Sidebar";
import Center from "./components/contents/Center";
import CreatePlaylistForm from "./components/pages/content/CreatePlaylistForm";

function App() {
  const isAuthorize = useSelector((state) => state.auth.isAuthorize);
  return (
    <Router>
      <Routes>{!isAuthorize && <Route path="/" element={<Login />} />}
      </Routes>
      {isAuthorize && (
        <div className="bg-black flex w-full max-w-full">
          <Sidebar />
          <Routes>
            <Route exact path="/home" element={<Center />} />
            <Route path="/search" element={<SearchGroup />} />
            <Route path="/create-playlist" element={<CreatePlaylistForm />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;

// Mau bertanya bagaimana caranya ya kalau kita tetap memanggil component sidebar pada saat page di reload. terima kasih.