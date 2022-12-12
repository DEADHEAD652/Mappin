require("dotenv").config({ path: "c.env" });
const express = require("express");
const mongoose = require("mongoose");
const pinRoutes = require("./routes/pinsRoute");
const userRoutes = require("./routes/userRoutes");
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
//database connection
require("./database/DB");
//routes
app.use("/api/pins", pinRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`server on port ${port}`);
});
