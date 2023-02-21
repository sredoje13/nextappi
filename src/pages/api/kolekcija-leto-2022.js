import clientPromise from "../../utils/connect";

export default async function handler (req, res) {
  const ObjectId = require('mongodb').ObjectID;
    const client = await clientPromise;
    const db = client.db("Comments");
    const { id } = req.query;
    switch (req.method) {
      case "POST":
        let bodyObject = JSON.parse(req.body);
        let newPost = await db.collection("kolekcija-leto-2022").insertOne(bodyObject);
        res.json(newPost.ops[0]);
        break;
      case "GET":
        const posts = await db.collection("kolekcija-leto-2022").find({}).toArray();
        res.json({ data: posts });
        break;
      case "PUT":
        console.log("updatee")
        const { name,note,comment } = req.body;

        const updatepost = await db.collection("kolekcija-leto-2022").updateOne(
          {
            _id: ObjectId(id),
          },
          {
            $set: {
              
              comment:comment,
              note:note
            },
          }
        );
    
        res.json(updatepost);
      break;
        case "DELETE":
         
          console.log("heloooooo")

        const post = await db.collection("kolekcija-leto-2022").deleteOne(
          { _id: ObjectId( id )}
          );
         
          res.json({ status: 201, data: post });  
        break;


    }
};