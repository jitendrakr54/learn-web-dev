import { MongoClient } from "mongodb";

// /api/new-meetup

async function handler(req, resp) {
  console.log("New meetup");
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      // "mongodb+srv://jitendra:admin@cluster0.pcn9vqj.mongodb.net/meetups?retryWrites=true&w=majority"
      "mongodb+srv://jitendra:admin@cluster0.419amzk.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne({ data });

    console.log(result);

    client.close();

    resp.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
