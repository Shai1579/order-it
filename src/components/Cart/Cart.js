import { Fragment, useContext, useState } from "react";
import cartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import Checkout from "./Checkout";
import UserModel from '../../model/UserModel';
import userContext from "../../store/user-context";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(cartContext);
  const userCtx = useContext(userContext);

  const isLoggedIn = userCtx.isLoggedIn;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const itemsAmount = cartCtx.items.reduce(
    (counter, item) => counter + item.amount,
    0
  );

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const orderHandler = () => {
    setIsCheckout(true);
  };
  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://order-it-6fb76-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user_id: userCtx.id, orderedItems: cartCtx.items }),
      }
    );
    await UserModel.updateUserToRealTime(userCtx.id, userData);
    userCtx.updateUser(userData);
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart()
  };
  const loginHandler = () => {
    props.onClose();
    props.showLogin();
  }
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button onClick={props.onClose} className={classes["button--alt"]}>
        Close
      </button>
      {!isLoggedIn && <button className={classes.button} onClick={loginHandler}>Please Login to order</button>}
      {isLoggedIn && itemsAmount > 0 && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );
  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </Fragment>
  );

  const isSubmittingModalContent = <p> Sending order data...</p>;
  const didSubmitModalContent = (
    <Fragment>
      <p>Order Sent!</p>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button"]}>
          Close
        </button>
      </div>
    </Fragment>
  );
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
      {isSubmitting && isSubmittingModalContent}
    </Modal>
  );
};

export default Cart;
