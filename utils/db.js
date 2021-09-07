import { MongoClient, ObjectId } from "mongodb";

const MONGO_URL_LOCAL = "mongodb://localhost:27017/moni_inc";
const MONGO_URL = `mongodb+srv://wangechi_k:wangechi_k@onlinestore.bbwik.mongodb.net/moni_inc?retryWrites=true&w=majority`;

export async function connectDB() {
  const client = await MongoClient.connect(MONGO_URL, {
    useUnifiedTopology: true,
  });
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getProducts(client, collection, skip, limit) {
  const db = client.db();
  const products = await db
    .collection(collection)
    .find()
    .skip(skip)
    .limit(limit)
    .toArray();

  return products;
}

export async function getAllProducts(client, collection){
  const db = client.db();
  const products = await db
    .collection(collection)
    .find()
    .toArray();

    return products;
}

export async function getProductById(client, collection, id){
  const db = client.db();
  const product = await db
    .collection(collection)
    .findOne({_id: ObjectId(id)})

    return product;
}


export async function getCart(client, collection, email){
  const db = client.db();
  const user = await db.collection(collection).findOne({email});
  const products = user.cart;
  return products;
}


