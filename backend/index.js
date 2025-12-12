const express = require("express");
const path = require("path");
const app = express();

// Serve frontend HTML
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// API backend
app.get("/api", (req, res) => {
  res.json({
    message: "Backend Render CI/CD",
    time: new Date()
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
