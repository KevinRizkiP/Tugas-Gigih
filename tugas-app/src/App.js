import Center from "./components/contents/Center";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
    </div>
  );
}

export default App;
