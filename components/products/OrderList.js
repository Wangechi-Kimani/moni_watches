import { useCart } from "react-use-cart";
import OrderItem from "./OrderItem";
import classes from "./CartList.module.css";

const OrderList = () => {
  const { isEmpty, items } = useCart();

  if (isEmpty) return <p>You do not have any items for checkout</p>;
  return (
    <ul className={classes.list}>
      {items.map((product) => (
        <OrderItem
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
};

export default OrderList;
