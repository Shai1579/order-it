import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = event => {
        event.preventDefault();
        
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 30) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }
    return <form className={classes.form}>
        <Input
        ref={amountInputRef}
         input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '30',
            step: '1',
            defaultValue: '1'
        }}></Input>
        <button onClick={submitHandler}>+</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5)</p> }
    </form>
}

export default MealItemForm;