//api/new-meetup
import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log("🚀 ~ handler ~ data:", data)
    const client = await MongoClient.connect(
      "mongodb+srv://prateeksahu199808:Vllj1cfSZds9sJ8y@cluster0.yfv8rzg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log("🚀 ~ handler ~ result:", result);
    client.close();
    res.status(201).json({ message: "Meetup inserted!!" });
  }
}
export default handler;
