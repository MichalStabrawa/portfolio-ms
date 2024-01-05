import React from "react";

import "./App.css";
import NavComponent from "./components/Navigation/NavComponent";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaVuejs,
  FaNode,
  FaNpm,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiNextdotjs,
  SiTypescript,
  SiNuxtdotjs,
  SiFirebase,
  SiJira,
} from "react-icons/si";

import HeaderComponent from "./components/Header/HeaderComponent";

type size = string;

const sizeIcon: size = "3.5rem";

function App() {
  return (
    <div className="App">
       <NavComponent />
     <HeaderComponent/>
      <div className="icon_wrapper">
        {" "}
        <FaReact size={sizeIcon} className="icon" color={"#61dafb"} />
        <span className="fa">
          {" "}
          <IoLogoJavascript size={sizeIcon} color={"#EFD81D"} />
        </span>
        <FaHtml5 size={sizeIcon} color={"#DD4B25"} />
        <FaCss3Alt size={sizeIcon} color={"#2862E9"} />
        <FaSass size={sizeIcon} color={"#CF649A"} />{" "}
        <FaVuejs size={sizeIcon} color={"#49C1A9"} />
        <SiNextdotjs size={sizeIcon} color={"#171717"} />{" "}
        <FaNode size={sizeIcon} color={"#43853D"} />{" "}
        <SiTypescript size={sizeIcon} color={"#3178c6"} />{" "}
        <SiNuxtdotjs size={sizeIcon} color={"#00dc82d9"} />{" "}
        <FaNpm size={sizeIcon} color={"#cb3837"} />{" "}
        <FaFigma size={sizeIcon} color={"#9747ff"} />{" "}
        <SiFirebase size={sizeIcon} color={"#F48110"} />
        <SiJira size={sizeIcon} color={"#1269E4"} />{" "}
        <FaGithub size={sizeIcon} />
      </div>
    </div>
  );
}

export default App;
