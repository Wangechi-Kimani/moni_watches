import { getSession, useSession } from "next-auth/client";
import CartList from "../components/products/CartList";
import TotalCart from "../components/products/TotalCart";
import Button from "../components/ui/Button";
import { connectDB } from "../utils/db";
import { useState } from "react";

function CartPage(props) {
  // const sessionData = props.session;
  // const cartWatches = props.cartProducts;
  // const error = props.error;
  // const totPrice = props.totalPrice;
  const { error, cartProducts, subTotal, VAT, totalPrice } = props;
  // console.log(totPrice);

  const [addQty, setAddQty] = useState(1);
  const [price, setPrice] = useState(subTotal);
  const [quantity, setQuantity] = useState(1);
  const [showPrice, setShowPrice] = useState(false);
  console.log(quantity);

  function addQuantity() {
    setAddQty(addQty + 1);
    setQuantity(quantity + 1);
    console.log(addQty);
  }

  // function totalPrice() {

  // }


  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <CartList products={cartProducts} addQty={addQuantity} quantity={quantity}/>
      <Button
        onClick={() => {
          setShowPrice(!showPrice);
        }}
      >
        Show Total Price
      </Button>
      {showPrice && (
        <TotalCart subTotal={subTotal} VAT={VAT} totalPrice={totalPrice} />
      )}
    </>
  );
  // return <div>You are loggd in as {sessionData.user.email}</div>
}

export async function getServerSideProps(context) {
  //get the session object
  const session = await getSession({ req: context.req });
  const response = context.res;

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  //get the user email
  const email = session.user.email;

  //connect to DB
  const client = await connectDB();
  const db = client.db();

  //get the user
  const user = await db.collection("users").findOne({ email });

  //find the watches
  const fetchedCartProducts = user.cart;

  if (fetchedCartProducts.length === 0) {
    return {
      props: {
        error: "No products found in your cart",
      },
    };
  }

  client.close();

  //sum the price
  const subTotal = fetchedCartProducts.reduce(
    (acc, watch) => acc + parseInt(watch.price),
    0
  );

  //get the VAT
  const VAT = subTotal * 0.16;

  //get total price
  let totalPrice = VAT + subTotal;
  totalPrice = totalPrice.toLocaleString("en-US");

  return {
    props: {
      cartProducts: fetchedCartProducts.map((product) => ({
        title: product.title,
        price: product.price,
        image: product.image,
        id: product.productId,
        // quantity: product.quantity,
      })),
      subTotal,
      VAT,
      totalPrice,
    },
  };

  // return {
  //   props: { session },
  // };
}

export default CartPage;
