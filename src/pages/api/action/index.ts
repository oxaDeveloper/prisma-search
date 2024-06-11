import type { NextApiRequest, NextApiResponse } from "next";
import { createData, deleteData, getData } from "~/server/lib/action";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { name, email, phone } = req.body;
    const newEmployee = await createData({ name, email, phone });
    return res.status(201).json(newEmployee);
  } else if (req.method === "GET") {
    const { query } = req.query;
    const getEmployee = await getData(query as string);
    return res.status(200).json(getEmployee);
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    await deleteData(id as string);
    return res.status(200).json({ message: "Employee deleted!" });
  }
}
