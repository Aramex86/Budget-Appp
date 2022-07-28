import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongoDb";
import { IUser } from "../../models/userModel";
import { ObjectId } from "bson";

interface Data {
  users: IUser[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { db } = await connectToDatabase();
  try {
    console.log(req.body);

    await db
      .collection("users")
      .updateOne(
        {},
        { $push: { cards: { ...req.body, _id: new ObjectId() } } }
      );

    res.status(200).json(req.body);
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong" });
  }
}
