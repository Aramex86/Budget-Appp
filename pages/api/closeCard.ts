import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongoDb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { db } = await connectToDatabase();
  const { cardId } = req.body;

  await db
    .collection("users")
    .updateOne(
      {
        "cards._id": new ObjectId(cardId),
      },
      { $set: { "cards.$.close": true, "mainCard.close": true } }
    )
    .then(() => res.status(200).json({ message: "Card close" }))
    .catch((error: any) => res.status(500).json({ message: error }));
}
