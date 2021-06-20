import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isNot5Chars = value => value.trim().length !== 5;

const Checkout = (props) => {
    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalInputRef = useRef()
    const cityInputRef = useRef()

    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
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

    setFormInputValidity({name: nameValid, street: streetValid, city: cityValid, postalCode: postalValid});
    const formIsValid = nameValid && streetValid && cityValid && postalValid;
    if (!formIsValid) {
        return;
    }
    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postalCode: enteredPostal
    })

  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formInputValidity.name ? '' : classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={`${classes.control} ${formInputValidity.street ? '' : classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input ref={streetInputRef} type='text' id='street' />
        {!formInputValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={`${classes.control} ${formInputValidity.postalCode ? '' : classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input ref={postalInputRef} type='text' id='postal' />
        {!formInputValidity.postalCode && <p>Please enter a valid postal code!</p>}
      </div>
      <div className={`${classes.control} ${formInputValidity.city ? '' : classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input ref={cityInputRef} type='text' id='city' />
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