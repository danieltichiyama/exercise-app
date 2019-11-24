const bookshelf = require('../bookshelf');

class ExerciseDifficulty extends bookshelf.Model {
    get tableName() {
        return "exercise_difficulties";
    }

    get hasTimestamps() {
        return true;
    }

    exercises() {
        return this.hasMany("Exercise");
    }
}

module.exports = bookshelf.model("ExerciseDifficulty", ExerciseDifficulty);