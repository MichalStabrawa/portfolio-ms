import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import SkillsPage from "./pages/SkillsPage";
import Route from "./pages/Route";
import AboutMe from "./pages/AboutMe";



function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Route />,
      errorElement: <SkillsPage/>,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <AboutMe /> },
        { path: "/skills", element: <SkillsPage /> },
  
      ],
    },  
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
