import app from "./server";

app.get("/health", (req, res) => {
  res.send("Health Check!");
});
