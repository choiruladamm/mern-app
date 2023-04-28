const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// GET all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

// GET a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  // check if data by id doesn't exist
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Data workout not found" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "Data workout not found" });
  }

  res.status(200).json(workout);
};

// CREATE a new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  // add doc to db
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a new workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  // check if data by id doesn't exist
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Data workout not found" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  res.status(200).json(workout);
};

// UPDATE a new workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  // check if data by id doesn't exist
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Data workout not found" });
  }

  const workout = await Workout.findOneAndUpdate(
    {
      _id: id,
    },
    { ...req.body }
  );

  if (!workout) {
    return res.status(404).json({ error: "Data workout not found" });
  }

  res.status(200).json(workout);
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
