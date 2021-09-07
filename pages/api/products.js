import { connectDB } from "../../utils/db"

const handler = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Make sure to parse the limit to number

    const PAGE_SIZE = 5;
    const skip = (page - 1) * PAGE_SIZE;

    //get the messages
    const client = await connectDB();
    const db = client.db();
    const watchCollection = db.collection("watches");
    const watches = await watchCollection
      .find()
      .skip(skip)
      .limit(PAGE_SIZE)
      .toArray();
    client.close();
    
    const returnedWatched = watches.map(watch => {
      return {
        title: watch.title,
          price: watch.price,
          image: watch.image,
          id: watch._id.toString()
      }
    })
    // return res.status(200).json(watches);
    return res.status(200).json(returnedWatched);
  } catch (error) {
    console.log(error);
  }
};


export default handler;
