import classes from "./Burger.module.css";

const Burger = (props) => {
  const addedClasses =
    classes.burger + " " + (props.open ? classes.clicked : "");
  return (
    <div onClick={props.onClick} className={addedClasses}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default Burger;
