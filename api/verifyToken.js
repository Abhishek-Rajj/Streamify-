const jwt = require("jsonwebtoken");
// in the header we give the web token to check for avalibilty of that data in database//
function verify(req, res, next) {
  const authHeader = req.headers.token;
  console.log(authHeader);
  if (authHeader) {
    const token = authHeader.split(" ")[1]; // taking the jwt taken from th postsman//

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("token is not valid");
      console.log(user, err);

      req.user = user;
      next();
    });
  } else {
    console.log("j");
    return res.status(401).json("You are not authenicated");
  }
}
module.exports = verify;
