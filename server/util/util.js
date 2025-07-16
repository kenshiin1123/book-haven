import "dotenv/config";
import jsonwebtoken from "jsonwebtoken";
import { hash, compare } from "bcrypt";

const { sign, verify } = jsonwebtoken;
const SECRET_TOKEN_KEY = process.env.SECRET_TOKEN_KEY;

const hashAString = async (string) => {
  return await hash(string, 12);
};

const isValidHash = async (string, storedString) => {
  return await compare(string, storedString);
};

const createJSONToken = (userId) => {
  return sign({ userId }, SECRET_TOKEN_KEY, { expiresIn: "7d" });
};

const validateJSONToken = (token) => {
  return verify(token, SECRET_TOKEN_KEY);
};

const getUserId = (req) => {
  const token = req.headers.authorization.split(" ")[1];
  return validateJSONToken(token).userId;
};

export {
  hashAString,
  isValidHash,
  createJSONToken,
  validateJSONToken,
  getUserId,
};
