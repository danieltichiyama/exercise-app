const bookshelf = require('../bookshelf');

class Goal extends bookshelf.Model {
    get tableName() {
        return "goals";
    }

    get hasTimestamps() {
        return true;
    }

    users() {
        return this.hasMany("User");
    }
}

module.exports = bookshelf.model("Goal", Goal);