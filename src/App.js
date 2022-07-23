import "./App.css";
import { Navbar } from "./components/Navbar";
import { GetStarted } from "./components/GetStarted";

function App() {
  return (
    <>
      <Navbar />
      {/* Page Contents */}
      <div className="bg-black h-screen px-20">
        <GetStarted />
      </div>
    </>
  );
}

export default App;
