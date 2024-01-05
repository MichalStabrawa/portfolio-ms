import classes from "./HeaderComponent.module.scss";

function HeaderComponent() {
  return (
    <header className={classes.header}>
      <div>
        {" "}
        <h1 className={classes.title}>Front End Developer</h1>
        <h2>Michal Stabrawa</h2>
      </div>
    </header>
  );
}

export default HeaderComponent;
