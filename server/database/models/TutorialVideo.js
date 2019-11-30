const bookshelf = require('../bookshelf');

class TutorialVideo extends bookshelf.Model {
    get tableName() {
        return 'tutorial_videos';
    }

    get hasTimestamps() {
        return true;
    }

    exercise_id() {
        return this.belongsTo("Exercise");
    }
}

module.exports = bookshelf.model("TutorialVideo", TutorialVideo);