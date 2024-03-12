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
        element: <ImageGallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
