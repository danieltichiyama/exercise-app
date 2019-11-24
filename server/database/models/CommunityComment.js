const bookshelf = require('../bookshelf');

class CommunityComment extends bookshelf.Model {
    get tableName() {
        return 'activity_levels';
    }

    get hasTimestamps() {
        return true;
    }

    user() {
        return this.belongsTo("User");
    }
    
    communityPost() {
        return this.belongsTo("CommunityPost");
    }
}

module.exports = bookshelf.model("CommunityComment", CommunityComment);