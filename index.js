import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const client = new MongoClient(
  "mongodb+srv://simpleCrudAdmin:dg912Ks5y48XwRPv@cluster0.jpk7gsk.mongodb.net/",
);

app.get("/", (req, res) => {
  res.send('Hi baby')
})
app.listen(PORT, () => {
  console.log(`port ${PORT}`)
})

// mongodb+srv://<db_username>:<db_password>@cluster0.jpk7gsk.mongodb.net/