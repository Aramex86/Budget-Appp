import { ObjectId } from "mongodb";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import { connectToDatabase } from "../../lib/mongoDb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase();

  const { period, month } = req.body;

  const dayly: any = [];
  const monthly: any = [];

  if (period === "today") {
    await db
      .collection("users")
      .find({ _id: new ObjectId("62dc4a8105f94163a295537c") })
      .sort({ "payments.amount": 1 })
      .forEach((user) => {
        const today = new Date().getDate();
        user.payments?.map((day: any) => {
          if (day.date.substring(2, -1) === `${today}`) {
            return dayly.push(day);
          }
        });
      })
      .then(() => {
        res.status(200).json(dayly);
      })
      .catch(() => {
        res.status(500).json({ message: "something wrong" });
      });
  }
  if (month) {
    await db
      .collection("users")
      .find({ _id: new ObjectId("62dc4a8105f94163a295537c") })
      .forEach((user) => {
        user.payments?.map((day: any) => {
          if (day.date.substring(4, 5) === month) {
            return monthly.push(day);
          }
        });
      })
      .then(() => {
        res.status(200).json(monthly);
      })
      .catch(() => {
        res.status(500).json({ message: "something wrong" });
      });
  } else {
    res.status(200).json(req.body);
  }

  // try {
  //   res.status(200).json({ body: period, message: "Succes" });
  // } catch (e) {
  //   res.status(500).json({ message: "Something goes wrong" });
  // }
}
