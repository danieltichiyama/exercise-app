const bookshelf = require('../bookshelf');

class CommunityComment extends bookshelf.Model {
    get tableName() {
        return 'community_comments';
    }

    get hasTimestamps() {
        return true;
    }

    user_id() {
        return this.belongsTo("User");
    }
    
    community_post_id() {
        return this.belongsTo("CommunityPost");
    }
}

module.exports = bookshelf.model("CommunityComment", CommunityComment);