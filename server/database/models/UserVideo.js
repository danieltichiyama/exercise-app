const bookshelf = require('../bookshelf');

class UserVideo extends bookshelf.Model {
    get tableName() {
        return 'user_videos';
    }

    get hasTimestamps() {
        return true;
    }

    user() {
        return this.belongsTo('User');
    }
    exercise() {
        return this.belongsTo("Exercise");
    }
}

module.exports = bookshelf.model("UserVideo", UserVideo);