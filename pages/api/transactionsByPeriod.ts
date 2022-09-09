import { UserPayments } from "./../../models/userModel";
import { stringToNumber } from "./../../helpers/stringToNumber";
import { ObjectId } from "mongodb";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import { connectToDatabase } from "../../lib/mongoDb";
import moment from "moment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase();

  const { period, month } = await req.body;

  const dayly: UserPayments[] = [];
  const monthly: UserPayments[] = [];

  if (period === "day") {
    await db
      .collection("users")
      .find({ _id: new ObjectId("62dc4a8105f94163a295537c") })
      .forEach((user) => {
        const { payments } = user;
        const today = moment().format("DD");
        payments?.map((day: UserPayments) => {
          return day.date.substring(2, -1) === `${today}` && dayly.push(day);
        });
      })
      .then(() => {
        res.status(200).json(dayly);
        res.end();
      })
      .catch(() => {
        res.status(500).json({ message: "something wrong" });
        res.end();
      });
  }

  if (month) {
    await db
      .collection("users")
      .find({ _id: new ObjectId("62dc4a8105f94163a295537c") })
      .forEach((user) => {
        const { categories, payments } = user;
        payments?.map((day: UserPayments) => {
          if (day.date.substring(4, 5) === month) {
            return monthly.push(day);
          }
          const filterByMonth = payments.filter((pay: UserPayments) => {
            if (month) return pay.date.substring(4, 5) === month;
          });

          const groupByCategory = filterByMonth.reduce(
            (group: any, product: any) => {
              const { category } = product;
              group[category] = group[category] ?? [];
              group[category].push(product);
              return group;
            },
            {}
          );

          const newCat = categories.map((el: UserPayments) => {
            const filterByCategory = groupByCategory[el.category];
            const getSumsOfCategories = filterByCategory?.reduce(
              (total: any, price: any) => {
                return stringToNumber(total) + stringToNumber(price.amount);
              },
              0
            );

            return {
              ...el,
              amount: getSumsOfCategories ? getSumsOfCategories : 0,
            };
          });

          db.collection("users").updateOne(
            { categories },
            { $set: { categories: newCat } }
          );
        });
      })
      .then(() => {
        res.status(200).json(monthly);
        res.end();
      })
      .catch(() => {
        res.status(500).json({ message: "something wrong" });
        res.end();
      });
  }

  if (period === "all") {
    await db
      .collection("users")
      .find({ _id: new ObjectId("62dc4a8105f94163a295537c") })
      .forEach((user) => {
        const { categories, payments } = user;
        const groupByCategory = payments.reduce((group: any, product: any) => {
          const { category } = product;
          group[category] = group[category] ?? [];
          group[category].push(product);
          return group;
        }, {});

        const newCat = categories.map((el: any) => {
          const filterByCategory = groupByCategory[el.category];
          const getSumsOfCategories = filterByCategory?.reduce(
            (total: any, price: any) => {
              return stringToNumber(total) + stringToNumber(price.amount);
            },
            0
          );

          return {
            ...el,
            amount: getSumsOfCategories ? getSumsOfCategories : 0,
          };
        });
        db.collection("users").updateOne(
          { categories },
          { $set: { categories: newCat } }
        );
      })
      .then(() => {
        res.status(200).end();
      })
      .catch(() => {
        res.status(500).json({ message: "something wrong" });
        res.end();
      });
  }
}
