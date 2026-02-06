require("dotenv").config();
const app = require("./src/app");
const connectToDb = require("./src/config/database");

connectToDb();

app.listen(3000, () => {
  console.log(`Example app listening on port http://localhost:3000`);
});
