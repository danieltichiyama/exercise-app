const bookshelf = require('../bookshelf');

class BodyPart extends bookshelf.Model {
    get tableName() {
        return "bodyparts";
    }

    get hasTimestamps() {
        return true;
    }

    exercises() {
        return this.hasMany("Exercise");
    }

    muscleGroup() {
        return this.belongsTo("MuscleGroup");
    }
}

module.exports = bookshelf.model("BodyPart", BodyPart);