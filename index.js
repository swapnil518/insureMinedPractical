require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const routers = require("./src/routes");
const connectToDatabase = require("./src/config/db.connection");
connectToDatabase();
app.use(
  cors({
    origin: "*",
    methods: ["OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));

app.use("/api/v1", routers);
app.listen(process.env.PORT, () => {
  console.log(`Port is listening on ${process.env.PORT}`);
});
