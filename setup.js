// ব্যবহার: node setup.js <আপনার-অ্যাডমিন-UID>
const fs = require("fs");
const uid = process.argv[2];
if (!uid || !/^[A-Za-z0-9]{20,40}$/.test(uid)) { console.error("সঠিক UID দিন। যেমন: node setup.js AbCd...28 অক্ষর"); process.exit(1); }
for (const f of ["public/index.html", "public/admin.html", "database.rules.json"]) {
  const t = fs.readFileSync(f, "utf8");
  fs.writeFileSync(f, t.split("REPLACE_WITH_ADMIN_UID").join(uid));
  console.log(f, "✔");
}
console.log("এবার চালান: firebase deploy");
