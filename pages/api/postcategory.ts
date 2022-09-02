import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import { connectToDatabase } from "../../lib/mongoDb";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { db } = await connectToDatabase();

  try {
    await db.collection("users").updateOne(
      {},
      {
        $push: {
          categories: { category: "Medicine", amount: "1000", currency: "USD" },
        },
      }
    );
    res.status(200).json({ message: "Succes" });
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong" });
  }
}

// [
//     { category: "Apatrament", amount: "1500" },
//     { category: "Grocery", amount: "3000" },
//     { category: "Party", amount: "5300" },
//     { category: "Medicine", amount: "1000" },
//   ]
