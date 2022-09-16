import { stringToNumber } from "./../../helpers/stringToNumber";
import { IUser, UserPayments } from "./../../models/userModel";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongoDb";

interface IData {
  data?: IUser[];
  message: string;
  body?: {};
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData>
) {
  const { db } = await connectToDatabase();

  const { amount, mainCardAmount, mainCardId, category } = req.body;
  let cardSum = mainCardAmount;

  if (amount < 0) {
    cardSum = Number(mainCardAmount) - stringToNumber(amount);
  } else if (amount > 0) {
    cardSum = Number(mainCardAmount) + stringToNumber(amount);
  }

  try {
    await db
      .collection("users")
      .updateOne(
        { "cards._id": new ObjectId(mainCardId) },
        { $set: { "cards.$.amount": `${cardSum}` } }
      );

    await db
      .collection("users")
      .updateOne(
        { "mainCard._id": new ObjectId(mainCardId) },
        { $set: { "mainCard.amount": `${cardSum}` } }
      );

    await db.collection("users").updateOne(
      {},
      {
        $push: {
          payments: {
            _id: new ObjectId(),
            ...req.body,
            created: new ObjectId().getTimestamp(),
          },
        },
      }
    );

    db.collection("users")
      .find({ _id: new ObjectId("62dc4a8105f94163a295537c") })
      .forEach(({ payments }) => {
        const categoryArr = payments
          .filter((cat: UserPayments) => {
            if (cat.category === category) {
              return cat;
            }
          })
          .map((cat: UserPayments) => {
            return Number(cat.amount.slice(1));
          })
          .reduce((acc: number, curr: number) => {
            return acc + curr;
          }, 0);

        db.collection("users").updateOne(
          { "categories.category": category },
          { $set: { "categories.$.amount": categoryArr } }
        );
      });

    res.status(200).json({ body: req.body, message: "Succes" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something goes wrong" });
  }
}
