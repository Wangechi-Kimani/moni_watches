import { useCart } from "react-use-cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import classes from "./OrderItem.module.css";

const OrderItem = (props) => {
  const { removeItem } = useCart();

  return (
    <li>
      <div className={classes.content}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>

        <div>
          <h5>{props.title}</h5>
          <FontAwesomeIcon
            icon={faTrashAlt}
            onClick={() => removeItem(props.id)}
          />
        </div>

        <div>
          <p className={classes.price}>{props.quantity}</p>
          <p>Ksh.{props.price}</p>
        </div>
      </div>
    </li>
  );
};

export default OrderItem;
