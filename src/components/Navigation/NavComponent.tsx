import { useState } from "react";
import { Link, NavLink, type NavLinkProps } from "react-router-dom";
import classes from "./NavComponent.module.scss";
import { Navbar } from "react-bulma-components";

function NavComponent(): JSX.Element {
  const navList = [
    { name: "home", link: "/" },
    { name: "about me", link: "about" },
    { name: "skills", link: "skills" },
    { name: "experience", link: "experience" },
    { name: "education", link: "education" },
    { name: "portfolio", link: "portfolio" },
  ];

  const [flag, setFlag] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Burger onClick={handleMenuToggle} />
      </Navbar.Brand>
      <Navbar.Menu className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}>
        <Navbar.Container>
          {navList &&
            navList.map((el) => {
              return (
                <Navbar.Item key={el.name}>
                  <NavLink to={el.link} className={({isActive})=>isActive?classes.active:classes.link}>
                    {el.name}
                  </NavLink>
                </Navbar.Item>
              );
            })}
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
}

export default NavComponent;
