import { useContext, useRef, useState } from 'react';
import classes from './Checkout.module.css';
import userContext from '../../store/user-context';

const isEmpty = value => value.trim() === '';
const isNot5Chars = value => value.trim().length !== 5;

const Checkout = (props) => {
    const userCtx = useContext(userContext);
    const [name, setName] = useState(userCtx.name || '');
    const [postal, setPostal] = useState(userCtx.postal || '');
    const [street, setStreet] = useState(userCtx.street || '');
    const [city, setCity] = useState(userCtx.city || '');
    
    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalInputRef = useRef()
    const cityInputRef = useRef()

    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postal: true
    })
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const nameValid = !isEmpty(enteredName);
    const streetValid = !isEmpty(enteredStreet);
    const cityValid = !isEmpty(enteredCity);
    const postalValid = !isNot5Chars(enteredPostal);

    setFormInputValidity({name: nameValid, street: streetValid, city: cityValid, postal: postalValid});
    const formIsValid = nameValid && streetValid && cityValid && postalValid;
    if (!formIsValid) {
        return;
    }
    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postal: enteredPostal
    })

  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formInputValidity.name ? '' : classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} value={name} onChange={(newVal) => {setName(newVal.target.value)}} type='text' id='name' />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={`${classes.control} ${formInputValidity.street ? '' : classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input ref={streetInputRef} value={street} onChange={(newVal) => {setStreet(newVal.target.value)}}  type='text' id='street' />
        {!formInputValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={`${classes.control} ${formInputValidity.postal ? '' : classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input ref={postalInputRef} value={postal} onChange={(newVal) => {setPostal(newVal.target.value)}}  type='text' id='postal' />
        {!formInputValidity.postal && <p>Please enter a valid postal code!</p>}
      </div>
      <div className={`${classes.control} ${formInputValidity.city ? '' : classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input ref={cityInputRef} value={city} onChange={(newVal) => {setCity(newVal.target.value)}}  type='text' id='city' />
        {!formInputValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;