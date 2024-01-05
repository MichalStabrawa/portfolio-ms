import classes from "./HeaderComponent.module.scss";

type HeaderProps = {
    name:string;
    title:string
}

function HeaderComponent({title,name}:HeaderProps) {
  return (
    <header className={classes.header}>
      <div className={classes.header__wrapper}>
        {" "}
        <h1 className={classes.title}>{title}</h1>
        <h2>{name}</h2>
      </div>
    </header>
  );
}

export default HeaderComponent;
