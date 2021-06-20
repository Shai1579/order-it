import HeaderButton from "../UI/HeaderButton";

const HeaderGeneralButton = (props) => {
  return (
      <HeaderButton className={props.className} title={props.title} onClick={props.onClick}>
        {props.icon}
      </HeaderButton> 
  );
};

export default HeaderGeneralButton;
