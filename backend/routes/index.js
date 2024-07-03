
const express = require("express");
// const  signinRouter = require("./signin");
// const watchlistRouter = require("./watchlist");
const homeRouter = require("./home");

const router = express.Router();
// router.use("/signin" , signinRouter);
// router.use("/watchlist", watchlistRouter);
router.use("/home", homeRouter );

module.exports = router;