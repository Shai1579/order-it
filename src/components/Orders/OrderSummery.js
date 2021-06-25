import classes from "./OrderSummery.module.css";

const OrderSummery = (props) => {
  const addedClasses = classes.summary + " " + props.addedClasses;
  let totalCost = 0;
  const items = [];
  props.orderedItems.forEach((item) => {
    totalCost += item.price * item.amount;
    items.push(
      <tr key={item.name}>
        <td>{item.name} </td><td>X{item.amount}</td>
      </tr>
    );
  });
  totalCost = totalCost.toFixed(2);
  return (
    <section className={addedClasses}>
      <div className={classes['summery-items']}>
        <table><tbody>{items}</tbody></table>
        <div className={classes['summery-total']}>
        <span>Total Cost: </span>
        <span >{totalCost}$</span>
        </div>
      </div>
    </section>
  );
};

export default OrderSummery;
