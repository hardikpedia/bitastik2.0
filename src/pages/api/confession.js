import Confession from "../../../models/confessionSchema";
import dbConnect from "../../../lib/dbconnect";
dbConnect();

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { uid, name, content } = req.body;
      console.log(uid, name, content);
      const confession_instance = new Confession({
        uid: uid,
        name: name,
        content: content,
      });
      await confession_instance.save();
      res.status(200).json({ message: "content Added", Status: "Success" });
    } catch (err) {
      const response = { Status: "Failure", Description: err.message };
      res.status(400).send(response);
    }
  }
  if (req.method === "GET") {
    try {
      const confessions = await Confession.find().sort({ createdAt: -1 });
      res.status(200).json({ confessions });
    } catch (err) {
      const response = { Status: "Failure", Description: err.message };
      res.send(response).status(400);
    }
  }

  if (req.method === "PUT") {
    try {
      const { user_id, _id, type } = req.body;
      const confession_instance = await Confession.findOne({ _id });
      if (type === "upvote") {
        confession_instance.upvotes += 1;
      } else if (type === "downvote") {
        confession_instance.downvotes += 1;
      }
      confession_instance.votedBy.push(user_id);
      await confession_instance.save();
      res
        .status(200)
        .json({ message: "content Added", Status: "Success", _id });
    } catch (err) {
      const response = { Status: "Failure", Description: err.message };
      res.status(400).send(response);
    }
  }
}

export default handler;
