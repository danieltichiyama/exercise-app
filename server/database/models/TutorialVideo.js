const bookshelf = require('../bookshelf');

class TutorialVideo extends bookshelf.Model {
    get tableName() {
        return 'tutorial_video';
    }

    get hasTimestamps() {
        return true;
    }

    exercise() {
        return this.belongsTo("Exercise");
    }
}

module.exports = bookshelf.model("TutorialVideo", TutorialVideo);