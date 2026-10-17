import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const client = new MongoClient(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-6ccea0u-shard-00-00.jpk7gsk.mongodb.net:27017,ac-6ccea0u-shard-00-01.jpk7gsk.mongodb.net:27017,ac-6ccea0u-shard-00-02.jpk7gsk.mongodb.net:27017/?ssl=true&replicaSet=atlas-902q77-shard-0&authSource=admin`,
);

export async function connectToMongoDB () {
  try {
    await client.connect();
    console.log("You successfully connect to MongoDB");
    return client;
  } catch (err) {
    console.dir(err)
  }
};

const connectedClient = await connectToMongoDB();
const db = connectedClient.db("simpleCrudDB");
const users = db.collection("users")

app.get ("/users", async(req, res) => {
  const cursor = users.find({});
  const allUsers = await cursor.toArray();
  res.send(allUsers);

})

app.get("/", (req, res) => {
  res.send('Hi baby')
})
app.listen(PORT, () => {
  console.log(`port ${PORT}`)
})
