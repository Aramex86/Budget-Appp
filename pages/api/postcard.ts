import { UserCards } from "./../../models/userModel";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongoDb";
import { IUser } from "../../models/userModel";
import { ObjectId } from "bson";

interface Data {
  users: IUser[];
}

const card: UserCards = {
  _id: "3",
  date: "08/24",
  paySystem: "mastercard",
  amount: "1,500",
  background: "#202041",
  cardHolder: "Jhon Doe",
  cardNumber: "13346878421365",
  currency: "$",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { db } = await connectToDatabase();

  const gg = await db
    .collection("users")
    .updateOne(
      { _id: new ObjectId("62dc4a8105f94163a295537c") },
      { $push: { cards: card } }
    );

  console.log(gg);
  res.status(200).json(gg);
}
