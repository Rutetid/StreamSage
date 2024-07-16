require("dotenv").config();
const express = require("express");
const app =  express();
const cors = require("cors");
const mainRouter = require("./routes/index")

app.use(express.json());
app.use(
	cors({
		origin: "https://streamsage.vercel.app",
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	}),
);

app.use("/api/v1", mainRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });