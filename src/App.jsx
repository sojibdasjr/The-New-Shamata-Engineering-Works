import { Outlet } from "react-router-dom";
import "./App.css";
import FirstNavbar from "./components/Navbar/FirstNavbar";
import Navbar from "./components/Navbar/Navbar";
import SecondaryNavbar from "./components/Navbar/SecondaryNavbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
    AOS.refresh();
  }, []);
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
