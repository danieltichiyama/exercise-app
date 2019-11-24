const bookshelf = require('../bookshelf');

class User extends bookshelf.Model {
    get tableName() {
        return "users";
    }

    get hasTimestamps() {
        return true;
    }

    gender() {
        return this.hasOne("Gender", "id", "gender_id");
    }

    activityLevel() {
        return this.hasOne("ActivityLevel", "id", "activity_level_id");
    }

    userTier() {
        return this.hasOne("UserTier", "id", "user_tier_id");
    }

    goal() {
        return this.hasOne("Goal", "id", "goal_id");
    }
}

module.exports = bookshelf.model("User", User);