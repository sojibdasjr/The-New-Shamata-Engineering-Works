import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/Pages/AboutUs.jsx";

import ImageGallery from "./components/Pages/ImageGallery.jsx";
import Contact from "./components/Pages/Contact.jsx";
import Home from "./components/Pages/Home.jsx";
import Portfolio from "./components/Pages/Portfolio.jsx";
import PortfolioDetails from "./components/Pages/PortfolioDetails.jsx";
import ChosseDesing from "./components/Pages/ChosseDesing.jsx";
import DetailChosse from "./components/Pages/DetailChosse.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/portfolio",
        loader: () => fetch("../fakeData.json"),
        element: <Portfolio />,
      },
      {
        path: "/portfolioDetails/:id",
        loader: () => fetch("../fakeData.json"),
        element: <PortfolioDetails />,
      },
      {
        path: "/gallery",
        loader: () => fetch("../fakeData.json"),
        element: <ImageGallery />,
      },
      {
        path: "/detailChosse/:id",
        loader: () => fetch("../fakeData.json"),
        element: <DetailChosse />,
      },
      {
        path: "/chosse",
        loader: () => fetch("../fakeData.json"),
        element: <ChosseDesing />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
