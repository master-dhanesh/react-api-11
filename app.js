require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();

// db connection
require("./model/database");
// require("./model/database").dbconfig();

// routes
const indexRoute = require("./routes/indexRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// -------------
app.use("/api", indexRoute);

app.listen(
    process.env.PORT,
    console.log(`server running on port ${process.env.port}`)
);
