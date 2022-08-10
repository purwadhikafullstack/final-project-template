const express = require("express");
const cors = require("cors");

const PORT = 8000;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  res.status(200).send("Express API");
});

app.get("/greetings", (req, res, next) => {
  res.status(200).json({
    message: "Hello Student !",
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`ERROR: ${err}`);
  } else {
    console.log(`API RUNNING at ${PORT} ✅`);
  }
});
