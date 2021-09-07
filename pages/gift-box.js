import { MongoClient } from "mongodb";

const GiftBoxPage = () => {
    return <div>Contact Page</div>
};

export async function getStaticProps() {
    const MONGODB_URI =
    "mongodb+srv://wangechi_k:wangechi_k@onlinestore.bbwik.mongodb.net/moni_inc?retryWrites=true&w=majority";

  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();

  const meetupCollection = db.collection("watches");
  const meetups = await meetupCollection.find().toArray(); 
//   console.log(meetups);

  client.close();

  return {
      props: {
          watches: {
              one: '1'
          }
      }
  }
}

export default GiftBoxPage;