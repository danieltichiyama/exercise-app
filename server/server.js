//express server
const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");
const api = require("./api/index");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

//necessary for local spin up of front end with npm run build, remove before deploying.
//use localhost:8080/ for npm run build
app.use(express.static(path.join(__dirname, "/public")));
//end

//body-parsers and decorator
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "50mb",
    parameterLimit: 50000
  })
);
app.use(bodyParser.json({ extended: true, limit: "50mb" }));
app.use(decorator);

//routers
app.use("/api/activity_levels", api.activity_levels);
app.use("/api/auth", api.authentication);
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
app.use("/api/tutorial_videos", api.tutorial_videos);
app.use("/api/user_videos", api.user_videos);
app.use("/api/exercises_users_workouts", api.exercises_users_workouts);
app.use("/api/community_posts", api.community_posts);
app.use("/api/community_comments", api.community_comments);
app.use("/api/exercise_bodyparts", api.exercise_bodyparts);
app.use("/api/foods_meals_users", api.foods_meals_users);
app.use("/api/nutrition", api.nutrition);
app.use("/api/vision", api.vision);
app.use("/api/fat_secret", api.fat_secret);
app.use("/api/video_upload", api.video_upload);
app.use("/api/image_upload", api.image_upload)
//routers-end

app.get("/smoke", (req, res) => {
  return res.json({ message: "Here's some smoke from server.js" });
});

//necessary for local spin up of front end with npm run build, remove before deploying
//use localhost:8080/ for npm run build
app.get(`*`, function(req, res) {
  res.sendFile(path.join(__dirname, "/public", "sw.js"));
});

app.listen(PORT, () => {
  console.log(`PORT ${PORT} at your service.`);
});
