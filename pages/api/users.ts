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

  try {
    const users = await db.collection("users").find({}).toArray();
    res.status(200).json(users);
  } catch (e: any) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
}
