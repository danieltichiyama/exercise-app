const bookshelf = require('../bookshelf');

class MuscleGroup extends bookshelf.Model {
    get tableName() {
        return "muscle_groups";
    }

    get hasTimestamps() {
        return true;
    }

    bodyParts() {
        return this.hasMany("BodyPart");
    }
}

module.exports = bookshelf.model("MuscleGroup", MuscleGroup);