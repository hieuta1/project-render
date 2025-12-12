<<<<<<< HEAD
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
=======
const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json({
    message: "Backend Render CI/CD",
    time: result.rows[0]
  });
});

app.listen(process.env.PORT || 3000);
>>>>>>> c455b613e887ead1ca0feafb6ffce1a8dbd5446f
