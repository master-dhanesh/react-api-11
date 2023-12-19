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

app.use(require("cors")({ credentials: true, origin: true }));

// -------------
app.use("/api", indexRoute);

app.use((req, res, next) => {
    res.status(404).json({ message: "Page Not Found" });
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        error: {
            message: err.message || "Internal Server Error",
        },
    });
});

app.listen(
    process.env.PORT,
    console.log(`server running on port ${process.env.port}`)
);
