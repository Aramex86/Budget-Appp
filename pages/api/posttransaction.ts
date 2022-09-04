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

// {"_id":{"$oid":"62dc4a8105f94163a295537c"},"cards":[{"_id":{"$oid":"62f2be1eaf4d148cffc76eaa"},"currency":"USD","date":"03/2022","paysystem":"visa","cardBg":"#484ef4","cardholder":"Jhon Doe","amount":"5100","cardNumber":"1215165115351151","created":{"$date":{"$numberLong":"1660075550000"}}},{"_id":{"$oid":"62f2d344af4d148cffc76ec8"},"currency":"EUR","date":"06/2022","paysystem":"mastercard","cardBg":"#f4a448","cardholder":"Jhon Doe","amount":"800","cardNumber":"1531186315315315","created":{"$date":{"$numberLong":"1660080964000"}}}],"lastName":"Doe","mainCard":{"_id":{"$oid":"62f2be1eaf4d148cffc76eaa"},"currency":"USD","date":"03/2022","paysystem":"visa","cardBg":"#484ef4","cardHolder":"Jhon Doe","amount":"5100","cardNumber":"1215165115351151"},"name":"Jhon","phone":null,"categories":[{"category":"Apartament","amount":{"$numberInt":"50"},"currency":"USD"},{"category":"Grocery","amount":{"$numberInt":"150"},"currency":"USD"},{"category":"Party","currency":"USD","amount":"500"},{"category":"Medicine","currency":"USD","amount":"700"}],"payments":[{"_id":{"$oid":"62f945debf79879ecef5b31b"},"category":"Apartament","amount":"-100","date":"14/08/2022 21:08 PM","mainCardAmount":"8970","mainCardId":"62f2be1eaf4d148cffc76eaa","created":{"$date":{"$numberLong":"1660503518000"}}},{"_id":{"$oid":"62f945f3bf79879ecef5b31d"},"category":"Apartament","amount":"-250","date":"14/08/2022 21:08 PM","mainCardAmount":"8870","mainCardId":"62f2be1eaf4d148cffc76eaa","created":{"$date":{"$numberLong":"1660503539000"}}},{"_id":{"$oid":"62f94605bf79879ecef5b31f"},"category":"Apartament","amount":"-100","date":"14/08/2022 21:08 PM","mainCardAmount":"8620","mainCardId":"62f2be1eaf4d148cffc76eaa","created":{"$date":{"$numberLong":"1660503557000"}}},{"_id":{"$oid":"62f950f6bf79879ecef5b33d"},"category":"Apartament","amount":"-100","date":"14/08/2022 22:08 PM","mainCardAmount":"5850","mainCardId":"62f2be1eaf4d148cffc76eaa","created":{"$date":{"$numberLong":"1660506358000"}}},{"_id":{"$oid":"62f95116bf79879ecef5b33f"},"category":"Apartament","amount":"-50","date":"14/08/2022 22:08 PM","mainCardAmount":"5750","mainCardId":"62f2be1eaf4d148cffc76eaa","created":{"$date":{"$numberLong":"1660506390000"}}},{"_id":{"$oid":"62f9513fbf79879ecef5b341"},"category":"Grocery","amount":"-150","date":"14/08/2022 22:08 PM","mainCardAmount":"5700","mainCardId":"62f2be1eaf4d148cffc76eaa","created":{"$date":{"$numberLong":"1660506431000"}}},{"_id":{"$oid":"62f951e4bf79879ecef5b343"},"category":"Grocery","amount":"-200","date":"14/08/2022 22:08 PM","mainCardAmount":"5550","mainCardId":"62f2be1eaf4d148cffc76eaa","created":{"$date":{"$numberLong":"1660506596000"}}},{"_id":{"$oid":"62f9520abf79879ecef5b345"},"category":"Grocery","amount":"-100","date":"14/08/2022 22:08 PM","mainCardAmount":"5350","mainCardId":"62f2be1eaf4d148cffc76eaa","created":{"$date":{"$numberLong":"1660506634000"}}},{"_id":{"$oid":"62f95268bf79879ecef5b347"},"category":"Grocery","amount":"-150","date":"14/08/2022 22:08 PM","mainCardAmount":"5250","mainCardId":"62f2be1eaf4d148cffc76eaa","created":{"$date":{"$numberLong":"1660506728000"}}}]}
