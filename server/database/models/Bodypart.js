const bookshelf = require('../bookshelf');

class Bodypart extends bookshelf.Model {
    get tableName() {
        return "bodyparts";
    }

    get hasTimestamps() {
        return true;
    }

    exercises() {
        return this.belongsToMany("Exercise", "exercises_bodyparts");
    }

    muscle_group_id() {
        return this.belongsTo("MuscleGroup");
    }
}

module.exports = bookshelf.model("Bodypart", Bodypart);