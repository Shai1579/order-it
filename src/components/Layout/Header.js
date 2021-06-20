import { Fragment, useContext, useEffect, useState } from "react";

import headerImage from "../../assets/food-header.jpg";
import HeaderCartButton from './HeaderCartButton';
import classes from "./Header.module.css";
import HeaderGeneralButton from "../Auth/HeaderLoginButton";

import userContext from '../../store/user-context';

import Burger from "./Burger";
import SideMenu from "./SideMenu";
import LoginIcon from "../../assets/LoginIcon";

const Header = (props) => {
  const userCtx = useContext(userContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(userCtx.isLoggedIn);
 
  const onMenuClickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  useEffect(() => {
    setIsLoggedIn(userCtx.isLoggedIn);
  },[userCtx])

  return (
    <Fragment>
      <header className={classes.header}>
      { !isLoggedIn && <HeaderGeneralButton className={classes['left-button']} onClick={props.onShowLogin} icon={<LoginIcon></LoginIcon>} title="Login"/> }
      { isLoggedIn &&  
      <span><Burger open={isMenuOpen} onClick={onMenuClickHandler}></Burger></span>}
      <SideMenu onCloseMenu={onMenuClickHandler} open={isMenuOpen}></SideMenu>
        <h1 >Meals</h1>
        <HeaderCartButton className={classes['right-button']} onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
          <img src={headerImage} alt="ORDER FOOD! NOW!"/>
      </div>
    </Fragment>
  );
};

export default Header;
