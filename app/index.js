const chalk = require("chalk");
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || process.env.port || 8080;

app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.listen(port, () => {
  console.log(
    `${chalk.greenBright("[Manager]")} ${chalk.green(
      `listening on http://localhost:${port}`
    )}`
  );
});
