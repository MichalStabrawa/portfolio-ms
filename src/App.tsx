import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import SkillsPage from "./pages/SkillsPage";
import Route from "./pages/Route";
import AboutMe from "./pages/about/AboutMe";
import ExperiencePage from "./pages/experience/ExperiencePage";
import EducationPage from "./pages/education/EducationPage";
import PortfolioPage from "./pages/portfolio/PortfolioPage";

export type titleProps = {
  home: string;
  about: string;
  skills: string;
  portfolio:string
};

const title: titleProps = {
  home: "<Frontend Developer>",
  about: "<ABOUT ME>",
  skills: "<Skills>",
  portfolio: "<PORTFOLIO>"
};

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Route />,
      errorElement: <SkillsPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <AboutMe title={title.about} /> },
        { path: "/skills", element: <SkillsPage /> },
        { path: "/experience", element: <ExperiencePage /> },
        {path: '/education', element: <EducationPage/>},
        {path: '/portfolio',element: <PortfolioPage title={title.portfolio}/>}
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
