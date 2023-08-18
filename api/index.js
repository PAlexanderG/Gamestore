// import the seedData
// const seedData = require("./seedData");

const express = require("express");
const router = express.Router();

// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// GET /api/health
router.get("api/health", (req, res, next) => {
  //   const health = req.health;
  res.send("OK");
});

// ROUTER: /api/video-games
router.use("api/video-games", require("./videoGames"));
// res.json(videoGames);
// ROUTER: /api/board-games
router.use("/board-games", require("./boardGames"));

module.exports = router;
