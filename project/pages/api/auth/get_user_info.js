import { NextApiResponse, NextApiRequest } from "next";
import connectDatabase from "../../../lib/db";
import User from "../../../user";
import response_message from "../../../lib/respond_msg";

export default async function (req, res) {
  try {
    await connectDatabase();

    if (!req.headers?.email) throw Error("Email Verification Failed!");

    const { email } = req.headers;

    const { _doc: user } = await User.findOne({ email });
    user.password = undefined;

    res.status(200).json({ status: "ok", user });
  } catch (error) {
    return response_message(res, 500, error?.message);
  }
}