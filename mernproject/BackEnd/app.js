const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const PORT = 7000;

const app = express();
app.use(cookieParser());
dotenv.config({ path: "./config.env" });
require("./db/conn");
app.use(express.json());
app.use(require("./router/auth"));

app.listen(PORT, () => {
  console.log(`server is runnig at port no ${PORT}`);
});
