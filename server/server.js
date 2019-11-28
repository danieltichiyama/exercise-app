//express server
const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");
const api = require("./api/index");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("./server/public"));

//body-parsers and decorator
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: true }));
app.use(decorator);

//routers
app.use("/api/activity_levels", api.activity_levels);
app.use("/api/exercise_difficulties", api.exercise_difficulties);
app.use("/api/exercise_equipment", api.exercise_equipment);
app.use("/api/exercise_types", api.exercise_types);
app.use("/api/genders", api.genders);
app.use("/api/goals", api.goals);
app.use("/api/meal_types", api.meal_types);
app.use("/api/muscle_groups", api.muscle_groups);
app.use("/api/user_tiers", api.user_tiers);
app.use("/api/bodyparts", api.bodyparts);
app.use("/api/exercises", api.exercises);
app.use("/api/users", api.users);
app.use("/api/workouts", api.workouts);
app.use("/api/food_images", api.food_images);

//routers-end

app.get("/smoke", (req, res) => {
  return res.json({ message: "hiyee" });
});

app.listen(PORT, () => {
  console.log(`PORT ${PORT} at your service.`);
});
