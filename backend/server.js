require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// route
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URIII)
  .then(() => {
    // listen on request
    app.listen(process.env.PORT, () => {
      console.log("connecting to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
