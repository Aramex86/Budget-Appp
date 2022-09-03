import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongoDb";
import { UserPayments } from "../../models/userModel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { db } = await connectToDatabase();

  const { month } = req.body;

  const filteredByMonth: UserPayments[] = [];

  await db
    .collection("users")
    .find({ _id: new ObjectId("62dc4a8105f94163a295537c") })
    .forEach(({ payments }) => {
      payments.filter((pay: any) => {
        if (Number(pay.date.substring(4, 5)) === month) {
          filteredByMonth.push(pay);
        } else if (!month) {
          Number(pay.date.substring(4, 5)) ===
            Number(new Date().getMonth() + 1) && filteredByMonth.push(pay);
        }
      });
    })
    .then(() => res.status(200).json(filteredByMonth))
    .catch(() => res.status(500).json({ message: "Something goes wrong !" }));
}
