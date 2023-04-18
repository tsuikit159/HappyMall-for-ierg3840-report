import connectDatabase from "../../lib/db";
import User from "../../user";
export default async function (req, res) {
  await connectDatabase();

  const users = await User.find();

  res.json({ users });
}