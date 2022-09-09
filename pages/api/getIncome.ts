import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongoDb";
import { UserPayments } from "../../models/userModel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { db } = await connectToDatabase();

  const incomes: UserPayments[] = [];

  await db
    .collection("users")
    .find({ _id: new ObjectId("62dc4a8105f94163a295537c") })
    .forEach(({ payments }) => {
      payments.map((pay: UserPayments) => {
        return pay.category === "Income" ? incomes.push(pay) : payments;
      });
    })
    .then(() => res.status(200).json(incomes))
    .catch(() => res.status(500).json({ message: "Something goes wrong !" }));
}
