import classes from "./Input.module.css";
import React from 'react';

const Input = React.forwardRef((props, ref) => {
    const inputClasses = classes.input + ` ${props.invalid ? classes.invalid : ''}`
    return (
        <div className={inputClasses}>
            <label htmlFor={props.input.id} className={classes.label}>{props.label}</label>
            <input ref={ref} {...props.input}></input>
        </div>
    )
});

export default Input;