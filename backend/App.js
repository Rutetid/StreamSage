require("dotenv").config();
const express = require("express");
const app =  express();
const cors = require("cors");
const mainRouter = require("./routes/index")


app.use(cors({ origin: "https://stream-sage-oksh.vercel.app" }));


app.use(express.json());


app.use("/api/v1", mainRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });

app.get("/", (req, res) => {
    res.json("Hello World");
});