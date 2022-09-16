import { UserCards } from "./../../models/userModel";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongoDb";
import { IUser } from "../../models/userModel";

interface Data {
  users: IUser[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { db } = await connectToDatabase();
  const card = {
    ...req.body,
    _id: new ObjectId(req.body._id),
  };

  console.log(new ObjectId(req.body._id));
  console.log(card);
  await db
    .collection("users")
    .updateOne(
      { _id: new ObjectId("62dc4a8105f94163a295537c") },
      { $set: { mainCard: card } }
    )
    .then(() =>
      res.status(200).json({ message: "Created", response: req.body })
    )
    .catch(() => res.status(500).json({ message: "Something Wrong" }));
}
