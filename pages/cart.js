// import Cart from "../components/cart/Cart";
import { useRouter } from "next/router";
import Cart from "../components/products/CartList";
import { useMounted } from "../utils/helpers";
import { useCart } from "react-use-cart";
import Button from "../components/ui/Button";

const CartPageTest = () => {
  const router = useRouter();
  const { hasMounted } = useMounted();

  const { items, isEmpty } = useCart();
  const numOfItemsInCart = hasMounted ? items.length : 0;

  const goToCheckOutPage = () => {
    router.push("/checkout");
  };

  // if (isEmpty)
  //   return (
  //     <div style={{ textAlign: "center" }}>
  //       You have no products in your cart
  //     </div>
  //   );

  const showNoProductsMessage = numOfItemsInCart === 0 && (
    <div style={{ textAlign: "center" }}>You have no products in your cart</div>
  );

  return (
    <>
      {numOfItemsInCart === 0 ? showNoProductsMessage : <Cart />}

      {numOfItemsInCart !== 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={goToCheckOutPage}>Procced to Checkout</Button>
        </div>
      )}
    </>
  );
};

export default CartPageTest;
