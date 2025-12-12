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
