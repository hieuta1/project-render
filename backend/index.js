const express = require("express");
const path = require("path");
const app = express();

// Serve frontend HTML
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
