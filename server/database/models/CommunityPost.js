const bookshelf = require('../bookshelf');

class CommunityPost extends bookshelf.Model {
    get tableName() {
        return 'community_posts';
    }

    get hasTimestamps() {
        return true;
    }

    user() {
        return this.belongsTo("User");
    }
    userVideo() {
        return this.hasOne("UserVideo", "id", "user_video_id");
    }
    foodImages() {
        return this.hasOne("FoodImage", "id", "food_image_id");
    }
    exercise() {
        return this.hasOne("Exercise", "id", "exercise_id");
    }
}

module.exports = bookshelf.model("CommunityPost", CommunityPost);