const bookshelf = require('../bookshelf');

class Exercise extends bookshelf.Model {
    get tableName() {
        return "exercises";
    }

    get hasTimestamps() {
        return true;
    }

    bodyParts() {
        return this.hasMany("BodyPart");
    }

    exerciseType() {
        return this.hasOne("ExerciseType", "id", "exercise_type_id");
    }

    exerciseDifficulties() {
        return this.hasOne("ExerciseDifficulty", "id", "exercise_difficulties_id");
    }

    exerciseEquipment() {
        return this.hasOne("ExerciseEquipment", "id", "exercise_equipment_id");
    }
}

module.exports = bookshelf.model("Exercise", Exercise);