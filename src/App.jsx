import { Outlet } from "react-router-dom";
import "./App.css";
import FirstNavbar from "./components/Navbar/FirstNavbar";
import Navbar from "./components/Navbar/Navbar";
import SecondaryNavbar from "./components/Navbar/SecondaryNavbar";

function App() {
  return (
    <>
      <FirstNavbar />
      <SecondaryNavbar />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
