import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ProjectDetails from "../Component/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
  {
    path: "/project-Details/:id",
    element: <ProjectDetails></ProjectDetails>,
  },
]);
