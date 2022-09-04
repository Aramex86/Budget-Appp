import { stringToNumber } from "./../../helpers/stringToNumber";
import { IUser, UserCards } from "./../../models/userModel";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongoDb";
import { UserPayments } from "../../models/userModel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { db } = await connectToDatabase();
  const { cardId, amount, date } = req.body;

  await db
    .collection("users")
    .find({ _id: new ObjectId("62dc4a8105f94163a295537c") })
    .forEach((user) => {
      const { mainCard, cards } = user;
      const summ = Number(mainCard.amount) + Number(amount);

      const sumTheAmount = cards.find((card: UserCards) => {
        return card._id.toString() === cardId;
      });

      const sumWithIncome =
        amount && Number(sumTheAmount.amount) + Number(amount);

      db.collection("users").updateOne(
        {
          "cards._id": new ObjectId(cardId),
        },
        {
          $set: {
            "cards.$.amount": String(sumWithIncome),
          },
          $push: {
            payments: {
              _id: new ObjectId(),
              category: "Income",
              amount: `+${amount}`,
              date: date,
              mainCardAmount: `${mainCard.amount}`,
              mainCardId: mainCard._id,
              created: new ObjectId().getTimestamp(),
            },
          },
        }
      );
      db.collection("users").updateOne(
        { "mainCard._id": new ObjectId(cardId) },
        { $set: { "mainCard.amount": `${summ}` } }
      );
    })

    .then(() =>
      res.status(200).json({ response: req.body, message: "Success!!!" })
    )
    .catch(() => res.status(500).json({ message: "Something goes wrong !" }));
}
