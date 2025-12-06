const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("CI/CD Pipeline Update v2 — LIVE! 🔥"));
app.get("/healthz", (req, res) => res.send("ok"));

app.listen(port, () =>
  console.log(`Running at http://localhost:${port}`)
);

