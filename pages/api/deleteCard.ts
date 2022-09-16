import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongoDb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { db } = await connectToDatabase();
  const { cardId, defaultCard } = req.body;
  console.log({ cardId, defaultCard });

  await db
    .collection("users")
    .updateOne(
      {},
      {
        $pull: { cards: { _id: new ObjectId(cardId) } },
        $set: { mainCard: defaultCard },
      }
    )
    .then(() => res.status(200).json({ message: "Card deleted" }))
    .catch((error: any) => res.status(500).json({ message: error }));
}
