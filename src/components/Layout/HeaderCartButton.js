import { useContext, useEffect, useState } from "react";
import cartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";
import HeaderButton from "../UI/HeaderButton";

const HeaderCartButton = (props) => {
  const [bump, setBump] = useState(false);
  const cartCtx = useContext(cartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBump(true);
    const timer = setTimeout(() => setBump(false), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <HeaderButton
      className={props.className}
      title="Your Cart"
      showBadge={true}
      badgeBumber={numberOfCartItems}
      bump={bump}
      onClick={props.onClick}
    >
      <CartIcon></CartIcon>
    </HeaderButton>
  );
};

export default HeaderCartButton;
