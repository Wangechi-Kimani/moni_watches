import { useCart } from "react-use-cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { isEmpty, updateItemQuantity, removeItem } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <li>
      <div className={classes.content}>
        <div className={classes.image}>
          {/* <Image src={props.image} width={100} height={100} alt={props.title}/> */}
          <img src={props.image} alt={props.title} />
        </div>
        
        <div>
          <h3>{props.title}</h3>
          <p>
            Quantity: {props.quantity}{" "}
            <span
              style={{ margin: "0 30px", color: "gray", cursor: "pointer" }}
            >
              <span style={{ padding: "0 20px" }} title='Add Qty'>
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={() => {
                    updateItemQuantity(props.id, props.quantity + 1);
                  }}
                />
                {/* <FontAwesomeIcon icon={faPlus} onClick={props.addQty}/> */}
              </span>
              <span title='Remove Qty'>
                {/* <FontAwesomeIcon icon={faMinus} onClick={props.removeQty}/> */}
                <FontAwesomeIcon
                  icon={faMinus}
                  onClick={() => {
                    updateItemQuantity(props.id, props.quantity - 1);
                  }}
                />
              </span>
            </span>
          </p>
        </div>
        <div style={{cursor: 'pointer'}} title='Remove Item'>
          <FontAwesomeIcon
            icon={faTrashAlt}
            onClick={() => removeItem(props.id)}
          />
          {/* <FontAwesomeIcon icon={faTrashAlt} onClick={props.deleteCartItem} /> */}
          <p>Ksh.{props.price}</p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
