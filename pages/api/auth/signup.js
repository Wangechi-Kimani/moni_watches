import { checkExistingUserEmail, hashPassword } from "../../../utils/auth";
import { connectDB } from "../../../utils/db";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;

  const { email, password, confirmPassword } = data;

  //input validation
  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    return res.json({
      error:
        "Invalid input - password should also be at least 7 characters long",
    });
  }

  //check if two passwords match
  if (password !== confirmPassword) {
    return res.json({ error: "Passwords do not match." });
    // return res
    //   .status(422)
    //   .json({ error: "Password and Confirm Password must be the same." });
  }

  const client = await connectDB();

  const db = client.db();

  //check if provided email address exists
  const user = await checkExistingUserEmail(email);

  if (user) {
    client.close();
    return res.json({ error: "Provided Email Address already exists" });
    // res.status(422).json({ error: "Provided Email Address already exists" });
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection("users").insertOne({
    email,
    password: hashedPassword,
    cart: [],
  });

  client.close();
  return res.status(201).json({ message: "Successfully Signd Up." });
};

export default handler;
