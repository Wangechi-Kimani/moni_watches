import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={classes.actions}>
      <button onClick={props.onClick}>{props.children}</button>
    </div>
  );
};

export default Button;
