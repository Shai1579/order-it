import { Fragment } from 'react';
import classes from './HeaderButton.module.css';

const HeaderButton = (props) => {
  const buttonClasses = classes.button + ' ' + props.className + (props.bump ? ` ${classes.bump}` : "");
  return <Fragment>{props.showBadge && <span className={classes.badge}> {props.badgeBumber} </span>}<button className={buttonClasses} onClick={props.onClick}>
    <span className={classes.icon}>
      {props.children}
    </span>
    <span> {props.title} </span>
  </button>
  </Fragment>;
};

export default HeaderButton;
