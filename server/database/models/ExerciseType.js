const bookshelf = require('../bookshelf');

class ExerciseType extends bookshelf.Model {
    get tableName() {
        return "exercise_types";
    }

    get hasTimestamps() {
        return true;
    }

    exercises() {
        return this.hasMany("Exercise");
    }
}

module.exports = bookshelf.model("ExerciseType", ExerciseType);