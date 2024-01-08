import { useState } from "react";
import classes from "./NavComponent.module.scss";

function NavComponent(): JSX.Element {
  const navList = ["home","about me", "skills", "experience", "education", "portfolio"];
  const [flag, setFlag] = useState<boolean>(false);

  function handleFlag() {
    setFlag(!flag);
  }
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        {navList.map((el) => (
          <li className={classes.list__item} key={el}>
            {el}
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
