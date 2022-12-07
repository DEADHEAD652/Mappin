require("dotenv").config({ path: "c.env" });
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 4000;
//database connection
//require("./database/DB");
mongoose
  .connect(process.env.dbURL, {
    useNewUrlParser: true,
    Useunifiedtopology: true,
  })
  .then(() => {
    console.log("Database connected!");
  })
  .catch((e) => {
    console.log(e);
  });
mongoose.set("strictQuery", false);

app.listen(port, () => {
  console.log(`server on port ${port}`);
});
