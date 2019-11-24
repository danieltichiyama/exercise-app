const bookshelf = require('../bookshelf');

class ExerciseEquipment extends bookshelf.Model {
    get tableName() {
        return "exercise_equipment";
    }

    get hasTimestamps() {
        return true;
    }

    exercises() {
        return this.hasMany("Exercise");
    }
}

module.exports = bookshelf.model("ExerciseEquipment", ExerciseEquipment);