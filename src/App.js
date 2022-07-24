import "./App.css";
import { Navbar } from "./components/Navbar";
import { GetStarted } from "./components/GetStarted";
import { MakingSafer } from "./components/MakingSafer";
import { Tracking } from "./components/Tracking";
import { SomeoneStole } from "./components/SomeoneStole";
import { Accident } from "./components/Accident";
import { WeekendDate } from "./components/WeekendDate";

function App() {
  return (
    <>
      <Navbar />
      {/* Page Contents */}
      <div className="bg-black text-white font-worksans space-y-52 h-full px-4 sm:px-20">
        <GetStarted />
        <MakingSafer />
        <Tracking />
        <SomeoneStole />
        <Accident />
        <WeekendDate />
      </div>
    </>
  );
}

export default App;
