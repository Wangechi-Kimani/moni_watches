import { useCart } from "react-use-cart";

import CartItem from "./CartItem";
import classes from "./CartList.module.css";

function CartList(props) {
  const { isEmpty, items } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <ul className={classes.list}>
      {items.map((product) => (
          <CartItem
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
    </ul>
  );

  // return (
  //   <ul className={classes.list}>
  //     {props.products.map((product) => (
  //       <CartItem
  //         key={product.id}
  //         id={product.id}
  //         image={product.image}
  //         title={product.title}
  //         price={product.price}
  //         quantity={props.quantity}
  //         quantity={product.quantity}
  //         // addQty={props.addQty}
  //       />
  //     ))}
  //   </ul>
  // );
}

export default CartList;
