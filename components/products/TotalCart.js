import { getStaticProps } from "../../pages/analog-watches";
import classes from "./TotalCart.module.css";
const TotalCart = (props) => {
  return (
    <section className={classes.content}>
      <div>
        <p>SubTotal</p>
        <p>VAT</p>
        <p>Total</p>
      </div>
      <div>
        <p>Ksh.{props.subTotal}</p>
        <p>Ksh.{props.VAT}</p>
        <p>Ksh.{props.totalPrice}</p>
      </div>
    </section>
  );
};

export default TotalCart;
