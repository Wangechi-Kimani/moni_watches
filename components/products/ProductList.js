import ProductItem from './ProductItem';
import classes from './ProductList.module.css';

function ProductList(props) {
  return (
    <ul className={classes.list}>
      {props.products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price.toLocaleString("en-US")}
        />
      ))}
    </ul>
  );
}

export default ProductList;
