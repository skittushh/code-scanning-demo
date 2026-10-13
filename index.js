const express = require("express");
const app = express();

const site = await Bun.file("./index.html").text();

app.get("/", async (req, res) => {
  const safeName =
    String(req.query.name || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    let greet = site.replace("%%_USER_NAME%%", safeName);
  res.send(greet);
});

app.listen(8080, () => {
  console.log("The webpage is live on http://localhost:8080 :)");
});
