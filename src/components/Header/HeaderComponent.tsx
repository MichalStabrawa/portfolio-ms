import { Link } from "react-router-dom";
import classes from "./HeaderComponent.module.scss";
import "bulma/css/bulma.min.css";
import { Button } from "react-bulma-components";

type HeaderProps = {
  name: string;
  title: string;
};

function HeaderComponent({ title, name }: HeaderProps) {
  return (
    <header className={classes.header}>
      <div className={classes.header__wrapper}>
        {" "}
        <h1 className={classes.title}>{`<${title}>`}</h1>
        <h2>{name}</h2>
        <div className={classes.btn_wrapper}>
          {" "}
          <Link to="about">
            {" "}
            <Button color="primary">More about me</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
