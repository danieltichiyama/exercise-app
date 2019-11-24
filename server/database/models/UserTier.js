const bookshelf = require('../bookshelf');

class UserTier extends bookshelf.Model {
    get tableName() {
        return "user_tiers";
    }

    get hasTimestamps() {
        return true;
    }

    users() {
        return this.hasMany("User");
    }
}

module.exports = bookshelf.model("UserTier", UserTier);