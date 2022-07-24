import "./App.css";
import { Navbar } from "./components/Navbar";
import { GetStarted } from "./components/GetStarted";
import { MakingSafer } from "./components/MakingSafer";

function App() {
  return (
    <>
      <Navbar />
      {/* Page Contents */}
      <div className="bg-black h-full px-4 sm:px-20">
        <GetStarted />
        <MakingSafer />
      </div>
    </>
  );
}

export default App;
