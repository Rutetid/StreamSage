
const express = require("express");
const  signinRouter = require("./user");
// const watchlistRouter = require("./watchlist");
// const homeRouter = require("./home");

const router = express.Router();
router.use("/user" , signinRouter);
// router.use("/watchlist", watchlistRouter);
// router.use("/home", homeRouter );

module.exports = router;
