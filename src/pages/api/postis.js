
import clientPromise from "../../utils/connect";

export default async function handler (req, res) {
    const client = await clientPromise;
    const db = client.db("Comments");
    switch (req.method) {
      case "POST":
        let bodyObject = JSON.parse(req.body);
        let newPost = await db.collection("comments").insertOne(bodyObject);
        res.json(newPost.ops[0]);
        break;
      case "GET":
        const posts = await db.collection("comments").find({}).toArray();
        res.json({ status: 200, data: posts });
        break;
    }
};
