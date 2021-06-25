import classes from "./MealItem.module.css";
import headerImage from "../../../assets/food-table.jpg";
import { useContext, useState } from "react";
import MealItemForm from "./MealItemForm";
import cartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(cartContext);

  const [mouseDown, setMouseDown] = useState(false);
  const price = `$${props.price.toFixed(2)}`;
  let liClasses = classes["meal-item"];
  if (mouseDown) {
    liClasses += ` ${classes["mouse-down-active"]}`;
  }

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount:amount,
      price: props.price
    })
  };
  const handleMouseMovement = (event) => {
    if (event.type === "mousedown") {
      setMouseDown(true);
    } else {
      setMouseDown(false);
    }
  };
  return (
    <li
      onMouseDown={handleMouseMovement}
      onMouseLeave={handleMouseMovement}
      onMouseUp={handleMouseMovement}
      className={liClasses}
    >
      <div className={classes["meal-image-box"]}>
        <img className={classes["meal-image"]} alt="Meal" src={props.image || headerImage} />
      </div>
      <div className={classes["meal-data"]}>
        <div className={classes["meal-header"]}>
          <h3 className={classes["meal-price"]}>{price}</h3>
          <h3 className={classes["meal-name"]}>{props.name}</h3>{" "}
        </div>
      </div>
      <div className={classes["meal-description"]}>{props.description}</div>
      <div className={classes["meal-bottom"]}>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
