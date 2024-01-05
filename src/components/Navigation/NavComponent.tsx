import classes from "./NavComponent.module.scss";

function NavComponent(): JSX.Element {
  const navList = ["home", "skills", "experience", "education", "portfolio"];
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        {navList.map((el) => (
          <li className={classes.list__item} key={el}>{el}</li>
        ))}
      </ul>
    </nav>
  );
}

export default NavComponent;
