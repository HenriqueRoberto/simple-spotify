import { MongoClient } from "mongodb";

const URI = "mongodb+srv://HenriqueRob:2876@cluster0.ieqhm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI);

const db = client.db("spotifyAula");
export { db }
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(db);