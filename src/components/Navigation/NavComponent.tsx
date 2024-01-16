import { useState } from "react";
import { NavLink ,type NavLinkProps} from "react-router-dom";
import classes from "./NavComponent.module.scss";

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

  function handleFlag() {
    setFlag(!flag);
  }
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        {navList.map((el) => (
          <li className={classes.list__item} key={el.name}>
            <NavLink to={el.link} className={({isActive})=>isActive?'active':undefined}>{el.name}</NavLink>
          </li>
        ))}
      </ul>

      <button onClick={handleFlag} className={classes.btn}>
        menu
      </button>
    </nav>
  );
}

export default NavComponent;
