const ProductDetailPage = () => {
return <div>Hello</div>
};

export async function getStaticPaths() {
    const client = await connectDB();
    const db = client.db();
  
    const productCollection = db.collection("watches");
    const products = await productCollection.find({}, { _id: 1 }).toArray(); //only fetch the ids
  
    client.close();
  
    return {
      fallback: "blocking",
      paths: products.map((product) => ({
        params: { slug: product._id.toString() },
      })),
    };
  }

export default ProductDetailPage;