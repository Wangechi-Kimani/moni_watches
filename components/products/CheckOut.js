import { useState } from "react";
import classes from "./Checkout.module.css";
import Button from "../ui/Button";

import OrderList from "../products/OrderList";

const CheckOut = (props) => {
  const [name, setName] = useState('React');

  const handleChange = (event) => {
    setName(event.target.value)
    console.log(name)
  }

  const goBackHandler = () => {
    history.back()
  }

  return (
    <div className={classes.container}>
      <div className={classes.payment}>
        <h4>Payment</h4>
        <form>
          <div className={classes.paymentType} onChange={handleChange}>
            <div className={classes.input}>
              <input type="radio" value="credit/debit" name="payment_type" />{" "}
              Card
            </div>
            <div className={classes.input}>
              <input type="radio" value="Paypal" name="payment_type" /> Paypal
            </div>
          </div>

          <div className={classes.control}>
            <label htmlFor="card_number">Card Number</label>
            <input type="number" required id="card_number" name="card_number" />
          </div>

          <div className={classes.control}>
            <label htmlFor="card_holder">Card Holder Name</label>
            <input type="text" required id="card_holder" name="card_holder" />
          </div>

          <div className={classes.cardInfo}>
            <div className={classes.input}>
              <input type="date" required id="expiry_date" name="expiry_date" placeholder='Expiry Date'/>
            </div>
            <div className={classes.input}>
              <input type="number" required id="cvv" name="cvv" placeholder='CVV'/>
            </div>
          </div>

          <div className={classes.actions}>
            <div>
              <button onClick={goBackHandler}>BACK</button>
            {/* <Button onClick={goBackHandler}>BACK</Button> */}
            </div>
            <div>
            <button>PAY Ksh. {props.total}</button>
            {/* <Button>PAY Ksh. {props.total}</Button> */}
            </div>
            
          </div>

        </form>
      </div>

      <div className={classes.order}>
      <h4>Your Order</h4>
       <OrderList />
       <div className={classes.orderTotalDetails}>
         <p>Subtotal</p>
         <p>Ksh.{props.subTotal}</p>
       </div>
       <div className={classes.orderTotalDetails}>
         <p>VAT</p>
         <p>Ksh.{props.VAT}</p>
       </div>
       <div className={classes.orderTotalDetails}>
         <p style={{fontWeight: 'bold'}}>Total</p>
         <p style={{fontWeight: 'bold'}}>Ksh.{props.total}</p>
       </div>
      </div> 
    </div>
  );
};

export default CheckOut;
