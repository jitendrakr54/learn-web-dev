# Project Time: API Routes

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Module Introduction </p>

- Module Content
  - Add a newsletter registration flow
  - Adding a "comments" feature

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Starting setup & a Challenge for you </p>

- Create api routes for newsletter registration and for comments to be stored and fetched

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Adding a Newsletter route </p>

- Refer newsletter-registration.js, /api/newsletter.js

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Adding comments API routes </p>

- Refer /api/comments/[eventId].js

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Connecting the frontend to the comments API routes </p>

- Refer components/input/comments.js

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Setting up a MongoDB databases </p>

- Refer for databse [https://cloud.mongodb.com/v2/6478acb5d43a680abb2a3baa#/clusters/detail/Cluster0](https://cloud.mongodb.com/v2/6478acb5d43a680abb2a3baa#/clusters/detail/Cluster0)

- To connect with MongoDB, we need MongoDB driver and can be downloaded with `npm install mongodb --save`

- Then click on connect -> Drivers where code to connect mongodb will be shown.

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Running MongoDB quries from inside API routes </p>

```js
import { MongoClient } from "mongodb";

const client = await MongoClient.connect(
  "mongodb+srv://jitendrakr54:W4otfNApxdgUk24p@cluster0.imkouor.mongodb.net/newsletter?retryWrites=true&w=majority"
);
const db = client.db();
const result = await db.collection("emails").insertOne({ email: userEmail });
console.log("result: ", result);
client.close();
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Inserting comments into the database </p>

- Refer [eventId].js

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Getting data from the database </p>

---

- Refer [eventId].js

  ```js
  if (req.method === "GET") {
    const documents = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();
    res.status(200).json({ comments: documents });
  }
  ```

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Addingg error handling </p>

- Added error handling in newsletter.js using try...catch. Refer newsletter.js

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> More error handling </p>

- Refer db-util.js, [eventId].js

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> A final note on MongoDB Connections </p>

- In this course, we always close our MongoDB connections via client.close().

  This works and you can do that.

  If you build an application where your MongoDB-related code will execute frequently (e.g. the API route will be hit
  frequently), you might want to take advantage of MongoDB's "connection pooling" though.

  For this, simply remove all client.close() calls from your code. The connection will then NOT be closed and will be
  re-used across requests.
