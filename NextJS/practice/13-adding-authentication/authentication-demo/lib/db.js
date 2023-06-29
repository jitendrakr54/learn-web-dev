import { MongoClient, compare } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://jitendrakr54:cHTmAyLu73k1DP4e@cluster0.imkouor.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
