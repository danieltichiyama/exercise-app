const bookshelf = require('../bookshelf');

class CommunityPost extends bookshelf.Model {
    get tableName() {
        return 'community_posts';
    }

    get hasTimestamps() {
        return true;
    }

    user_id() {
        return this.belongsTo("User");
    }
    user_video_id() {
        return this.hasOne("UserVideo", "id", "user_video_id");
    }
    food_images_id() {
        return this.hasOne("FoodImage", "id", "food_image_id");
    }
    exercise_id() {
        return this.hasOne("Exercise", "id", "exercise_id");
    }
    community_comment_id() {
        return this.hasMany("CommunityComment", "community_post_id", "id");
    }
}

module.exports = bookshelf.model("CommunityPost", CommunityPost);