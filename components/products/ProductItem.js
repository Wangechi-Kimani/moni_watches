import { useRouter } from "next/router";
import { useState } from "react";
import { useCart } from "react-use-cart";

import Card from "../ui/Card";
import classes from "./ProductItem.module.css";

function ProductItem(props) {
  const router = useRouter();
  // const { addItem } = useCart();


  // const [session, loading] = useSession();
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  

  function showDetailsHandler() {
    router.push(`/${props.id}`);
  }


  // async function addToCartHandler() {
  //   const url = "/api/cart";

  //   if (!session) {
  //     router.push("/auth");
  //     return;
  //   }
  //   setIsLoading(true);
  //   const response = await axios.post(url, {
  //     email: session.user.email,
  //     product: props.id,
  //     image:props.image,
  //     title: props.title,
  //     price: props.price,
  //   });
  //   const { data } = response;
  //   console.log(data);
  //   setSuccess(true);
  //   setDisabled(true);
  //   setIsLoading(false);
  // }

  async function addToCartHandler() { 
    setIsLoading(true);
    setDisabled(true);
    
    const product = {
      id:props.id,
      price:props.price,
      title:props.title,
      image:props.image
    }
    addItem(product);

    setTimeout(() => {
      setIsLoading(false);
      setDisabled(false);
    }, 2000);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <h5>Ksh. {props.price}</h5>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler} disabled={disabled}>
            Show Details
          </button>

          <button onClick={addToCartHandler} disabled={disabled}>
            {" "}
            {isLoading ? "Loading" : "Add To Cart"}
          </button>

          {/* <button onClick={addToCartHandler} disabled={disabled}>{success && session ? 'Added To Cart' : 'Add To Cart'}</button> */}
        </div>
      </Card>
    </li>
  );
}

export default ProductItem;
