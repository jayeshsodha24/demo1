import { Fragment } from "react";
import classes from './MealsItem.module.css';
const  price=`$${props.price.toFixed(2)}`;
const MealsItem=(props)=>{
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>

            </div>
        </li>
    );
};
export default MealsItem;