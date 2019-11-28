const bookshelf = require('../bookshelf');

class Exercise extends bookshelf.Model {
    get tableName() {
        return "exercises";
    }

    get hasTimestamps() {
        return true;
    }

    primary_bodypart_id() {
        return this.hasOne("BodyPart", "id", "primary_bodypart_id");
    }

    exercise_type_id() {
        return this.hasOne("ExerciseType", "id", "exercise_type_id");
    }

    exercise_difficulty_id() {
        return this.hasOne("ExerciseDifficulty", "id", "exercise_difficulty_id");
    }

    exercise_equipment_id() {
        return this.hasOne("ExerciseEquipment", "id", "exercise_equipment_id");
    }
}

module.exports = bookshelf.model("Exercise", Exercise);