import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.body.token;
  try {
    if (!token) {
      res.status(404).send("Token is required");
    }
    req.user = jwt.verify(token, "MettihewToken");
  } catch (error) {
    console.log(error)
    throw new Error(error)
    // console.log(error);
    // res.status(401).send("Invalid token");
  }
  return next()
};

export default verifyToken;
