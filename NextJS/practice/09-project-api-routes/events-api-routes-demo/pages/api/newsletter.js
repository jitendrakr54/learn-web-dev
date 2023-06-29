import { connectDatabase, insertDocument } from "../../helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }

    try {
      await insertDocument(client, "newsletter", { email: userEmail });
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    client.close();
    res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;

// MongoClent.connect(
//   "mongodb+srv://jitendrakr54:ugOHeUErJ3Ramd4s@cluster0.imkouor.mongodb.net/newsletter?retryWrites=true&w=majority"
// )
//   .then((client) => {
//     const db = client.db();
//     return db.collection("emails").insertOne({ email: userEmail });
//   })
//   .then({});
