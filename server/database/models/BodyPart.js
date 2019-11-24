const bookshelf = require('../bookshelf');

class BodyPart extends bookshelf.Model {
    get tableName() {
        return "bodyparts";
    }

    get hasTimestamps() {
        return true;
    }

    exercises() {
        return this.hasMany("Exercise", "primary_bodypart_id");
    }

    muscle_group_id() {
        return this.belongsTo("MuscleGroup");
    }
}

module.exports = bookshelf.model("BodyPart", BodyPart);