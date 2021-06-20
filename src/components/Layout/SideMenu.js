import LogoutIcon from "../../assets/LogoutIcon";
import classes from "./SideMenu.module.css";
import firebase from "firebase/app";
import { useContext } from "react";
import userContext from "../../store/user-context";
import HeaderGeneralButton from "../Auth/HeaderLoginButton";
import FoodBagIcon from "../../assets/FoodBagIcon";

const SideMenu = (props) => {
    const userCtx = useContext(userContext);
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
  return (
    <div className={addedClasses}>
        <span className={classes.title}>
            <h4>
            Hi {userCtx.name}!
            </h4>
        </span>
        <HeaderGeneralButton title="Orders" icon={<FoodBagIcon></FoodBagIcon>}></HeaderGeneralButton>
        <span className={classes['buttons-space']}></span>
      <HeaderGeneralButton onClick={logoutUser} title="Logout" icon={<LogoutIcon></LogoutIcon>}></HeaderGeneralButton>
    </div>
  );
};

export default SideMenu;
