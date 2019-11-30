const bookshelf = require('../bookshelf');

class ExerciseBodypart extends bookshelf.Model {
    get tableName() {
        return "exercises_bodyparts";
    }

    get hasTimestamps() {
        return true;
    }

    exercise_id() {
        return this.hasOne("Exercise", "id", "exercise_id");
    }

    bodypart_id() {
        return this.hasOne("Bodypart", "id", "bodypart_id");
    }
}

module.exports = bookshelf.model("ExerciseBodypart", ExerciseBodypart);