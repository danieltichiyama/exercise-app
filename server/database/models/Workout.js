const bookshelf = require("../bookshelf");

class Workout extends bookshelf.Model {
  get tableName() {
    return "workouts";
  }

  get hasTimestamps() {
    return true;
  }

  user_id() {
    return this.belongsTo("User");
  }

  exercises() {
    return this.belongsToMany("Exercise", "workouts_exercises");
  }
}

module.exports = bookshelf.model("Workout", Workout);
