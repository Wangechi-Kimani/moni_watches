import { connectDB } from "../utils/db";
import { getProductById } from "../utils/db";
import ProductDetail from "../components/products/ProductDetail";

const ProductDetailPage = (props) => {
  const { product } = props;

  return (
    <ProductDetail
      image={product.image}
      title={product.title}
      price={product.price}
      description={product.description}
    />
  );
};

export async function getStaticPaths() {
  const client = await connectDB();
  const db = client.db();

  const productCollection = db.collection("watches");
  const products = await productCollection.find({}, { _id: 1 }).toArray(); //only fetch the ids

  client.close();

  // return {
  //   fallback: false,
  //   paths: products.map((product) => ({
  //     params: { slug: product._id.toString() },
  //   })),
  // };
  return {
    fallback: 'blocking',
    paths: [
      {params: {slug: products[0].toString()}},
      {params: {slug: products[1].toString()}},
      {params: {slug: products[2].toString()}},
      {params: {slug: products[3].toString()}},
      {params: {slug: products[4].toString()}}
    ]
  };

  // return {
  //   paths: [
  //     { params: { slug: '1' } },
  //     { params: { slug: '2' } }
  //   ],
  //   fallback: 'blocking'
  // }
}

export async function getStaticProps(context) {
  const { params } = context;
  // const productId = '611ceeb5dcdf6b34e46b363d'
  const productId = params.slug;
  // console.log(productId);

  const client = await connectDB();
  const selectedProduct = await getProductById(client, 'watches', productId);
  // console.log(selectedProduct);

  client.close();

  return {
    props: {
      product: {
        id: selectedProduct._id.toString(),
        image: selectedProduct.image,
        title: selectedProduct.title,
        price: selectedProduct.price,
        description: selectedProduct.description,
      },
    },
  };
}

export default ProductDetailPage;
