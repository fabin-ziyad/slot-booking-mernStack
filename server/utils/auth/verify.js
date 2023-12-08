const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // Extract token from Authorization header
  const token = req.headers.authorization;
  const decodedToken= token.split(" ")[1];
  console.log(decodedToken)
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Verify the token
  jwt.verify(decodedToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token authentication failed", err });
    }
    console.log("decoded",decoded);
      req.user = decoded;
    next();
  });
};

module.exports =  verifyToken ;
