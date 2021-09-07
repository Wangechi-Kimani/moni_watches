import { useMounted } from "../utils/helpers";
import { useCart } from "react-use-cart";

import CheckOut from "../components/products/CheckOut";

const CheckOutPage = (props) => {
  const { hasMounted } = useMounted();

  const { items } = useCart();

  const priceOfItemsICart = items.map((item) => item.itemTotal);
  const subToTalPrice = priceOfItemsICart.reduce(
    (acc, itemTotal) => acc + itemTotal,
    0
  );
  const VAT = subToTalPrice * 0.16;
  const totalPrice = VAT + subToTalPrice;

  const numOfItemsInCart = hasMounted ? items.length : 0;
  // {numOfItemsInCart === 0 ? '' : items.map(product => <p key={product.id}>Total Value: {product.itemTotal}</p>)}

  return (
    <>
      {numOfItemsInCart === 0 ? (
        <p style={{textAlign:'center'}}>You have no products for checkout. </p>
      ) : (
        <CheckOut subTotal={subToTalPrice} VAT={VAT} total={totalPrice} />
      )}
    </>
  );
  //   return  <div>{numOfItemsInCart === 0 ? '' : items.map(product => <p key={product.id}>Total Value: {product.itemTotal}</p>)}</div>
};

export default CheckOutPage;
