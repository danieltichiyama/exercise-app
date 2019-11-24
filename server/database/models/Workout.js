const bookshelf = require('../bookshelf');

class Workout extends bookshelf.Model {
    get tableName() {
        return "workouts";
    }

    get hasTimestamps() {
        return true;
    }

    exercises() {
        return this.belongsToMany("User");
    }
}

module.exports = bookshelf.model("Workout", Workout);