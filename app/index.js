const chalk = require("chalk");
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || process.env.port || 8080;

app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.listen(port, () => {
  console.log(
    `${chalk.greenBright("[Manager]")} ${chalk.green(
      "listening on http://localhost:${port}"
    )}`
  );
});
