const crypto = require("crypto");
const secret = crypto.randomBytes(16).toString("hex")
const hash = crypto.createHmac("sha512",secret).update("Nodejs").digest("hex");
console.log(hash);


// const hash = crypto.createHash("sha512", {encoding: "utf-8"}).update("123456").digest("hex");
// console.log(hash);
