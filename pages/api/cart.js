import { connectDB, insertDocument } from "../../utils/db";

const handler = async (req, res) => {
  try {
    if (req.method === "POST") {
      const email = req.body.email;
      const prodId = req.body.product;
      const title = req.body.title;
      const price = req.body.price;
      const image = req.body.image;
       
      //connect to the DB
       const client = await connectDB();
       const db = client.db();
  
        //find the user in the incoming request to be updated
        const user = await db.collection("users").findOne({ email: email });
      //do some validation

      if (!user) {
        return res
          .status(400)
          .json({ error: "User does not exist. Please login first" });
      }

      const prod = await user.cart.find((p) => p.productId === prodId);
      // console.log(prod);

      if (prod) {
        return res.status(200).json({ error: "Already added in your Cart" });
      }

      //insert the product in the user cart
      const updatedCart = [...user.cart];
      updatedCart.push({ productId: prodId, image, title, price, quantity: 1 });

      // // create a document that sets the plot of the movie
      const updateDoc = {
        $set: { cart: updatedCart },
      };

      // //update the document
      const result = await db.collection("users").updateOne(user, updateDoc);
      client.close();

      return res.status(200).json({ message: "Added to cart." });
    } 
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

export default handler;
