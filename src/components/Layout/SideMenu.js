import LogoutIcon from "../../assets/LogoutIcon";
import classes from "./SideMenu.module.css";
import firebase from "firebase/app";
import { useContext } from "react";
import userContext from "../../store/user-context";
import HeaderGeneralButton from "../Auth/HeaderLoginButton";
import FoodBagIcon from "../../assets/FoodBagIcon";
import { useHistory, useLocation } from "react-router-dom";
import MealsIcon from "../../assets/MealsIcon";

const SideMenu = (props) => {
    const userCtx = useContext(userContext);
    const history = useHistory();
    const location = useLocation();

    const inOrdersPage = location.pathname === "/orders";
  const addedClasses =
    classes["side-menu"] + " " + (props.open ? classes.open : "");
    const logoutUser = () => {
        props.onCloseMenu();
        firebase
          .auth()
          .signOut()
          .catch((err) => {
            console.log(err);
          })
          .then(() => {
            userCtx.clearUser();
          });
        
      };
    const goToOrders = async () => {
      props.onCloseMenu();
      history.push("/orders");
    };
    const goToMeals = () => {
      props.onCloseMenu();
      history.push("/");
    }
  return (
    <div className={addedClasses}>
        <span className={classes.title}>
            <h4>
            Hi {userCtx.name}!
            </h4>
        </span>
        {!inOrdersPage ? <HeaderGeneralButton onClick={goToOrders} title="Orders" icon={<FoodBagIcon></FoodBagIcon>}></HeaderGeneralButton> : 
        <HeaderGeneralButton onClick={goToMeals} title="Meals" icon={<MealsIcon></MealsIcon>}></HeaderGeneralButton>}
        <span className={classes['buttons-space']}></span>
      <HeaderGeneralButton onClick={logoutUser} title="Logout" icon={<LogoutIcon></LogoutIcon>}></HeaderGeneralButton>
    </div>
  );
};

export default SideMenu;
