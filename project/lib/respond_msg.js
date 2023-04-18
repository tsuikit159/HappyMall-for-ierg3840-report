import { NextApiResponse } from "next";

export default function response_message(
  res,
  status,
  message
) {
  return res.status(status).json({ message });
}