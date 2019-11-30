const bookshelf = require("../bookshelf");

class User extends bookshelf.Model {
  get tableName() {
    return "users";
  }

  get hasTimestamps() {
    return true;
  }

  gender_id() {
    return this.hasOne("Gender", "id", "gender_id");
  }

  activity_level_id() {
    return this.hasOne("ActivityLevel", "id", "activity_level_id");
  }

  user_tier_id() {
    return this.hasOne("UserTier", "id", "user_tier_id");
  }

  goal_id() {
    return this.hasOne("Goal", "id", "goal_id");
  }

  workout_id() {
    return this.hasMany("Workout");
  }
}

module.exports = bookshelf.model("User", User);
