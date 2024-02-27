import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Galileodesign from "pages/Galileodesign";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "galileodesign",
      element: <Galileodesign />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
