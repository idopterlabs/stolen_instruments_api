const authToken = process.env.AUTH_TOKEN;

if (!authToken) {
  throw "Missing AUTH_TOKEN env";
}

const auth = (req, res, next) => {
  const accessToken = req.get("X-ACCESS-TOKEN");

  if (!accessToken) {
    res.status(403)
    res.json({ error: "Missing access token" });
    return;
  }

  if (accessToken != authToken) {
    res.status(401)
    res.json({error: "Invalid access token" });
    return;
  }

  next();
};

module.exports = auth;
