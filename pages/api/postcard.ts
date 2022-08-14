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
    await db.collection("users").updateOne(
      {},
      {
        $push: {
          cards: {
            _id: new ObjectId(),
            ...req.body,
            created: new ObjectId().getTimestamp(),
          },
        },
      }
    );

    res.status(200).json({ body: req.body, message: "Succes" });
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong" });
  }
}
