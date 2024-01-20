import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import SkillsPage from "./pages/SkillsPage";
import Route from "./pages/Route";
import AboutMe from "./pages/about/AboutMe";

export type titleProps = {
  home:string,
  about:string,
  skills:string,

}

const title:titleProps = {
home:'Frontend Developer',
about:'<ABOUT ME>',
skills:'Skills'
}

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Route />,
      errorElement: <SkillsPage/>,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <AboutMe title={title.about} /> },
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
