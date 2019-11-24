const ActivityLevel = require("./models/ActivityLevel")
const BodyPart = require("./models/BodyPart")
const CommunityComment = require("./models/CommunityComment")
const CommunityPost = require("./models/CommunityPost")
const Exercise = require("./models/Exercise")
const ExerciseDifficulty = require("./models/ExerciseDifficulty")
const ExerciseEquipment = require("./models/ExerciseEquipment")
const ExerciseType = require("./models/ExerciseType")
const FoodImage = require("./models/FoodImage")
const FoodMealUser = require("./models/FoodMealUser")
const Gender = require("./models/Gender")
const Goal = require("./models/Goal")
const MealType = require("./models/MealType")
const MuscleGroup = require("./models/MuscleGroup")
const TutorialVideo = require("./models/TutorialVideo")
const User = require("./models/User")
const UserTier = require("./models/UserTier")
const UserVideo = require("./models/UserVideo")
const Workout = require("./models/Workout")



module.exports = function(req, res, next) {
  req.db = {
    ActivityLevel,
    BodyPart,
    CommunityComment,
    CommunityPost,
    Exercise,
    ExerciseDifficulty,
    ExerciseEquipment,
    ExerciseType,
    FoodImage,
    FoodMealUser,
    Gender,
    Goal,
    MealType,
    MuscleGroup,
    TutorialVideo,
    User,
    UserTier,
    UserVideo,
    Workout
  };
  next();
};
