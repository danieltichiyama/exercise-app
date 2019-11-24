const bookshelf = require('../bookshelf');

class ActivityLevel extends bookshelf.Model {
    get tableName() {
        return 'activity_levels';
    }

    get hasTimestamps() {
        return true;
    }

    user() {
        return this.hasMany('User');
    }
}

module.exports = bookshelf.model("ActivityLevel", ActivityLevel);