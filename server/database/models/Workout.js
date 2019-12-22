const bookshelf = require("../bookshelf");

class Workout extends bookshelf.Model {
  get tableName() {
    return "workouts";
  }

  get hasTimestamps() {
    return true;
  }

  exercisesUsersWorkouts() {
    return this.hasMany("ExerciseUserWorkout");
  }

  // user_id() {
  //   return this.belongsTo("User");
  // }

}

module.exports = bookshelf.model("Workout", Workout);
