const bookshelf = require('../bookshelf');

class FoodImage extends bookshelf.Model {
    get tableName() {
        return 'food';
    }

    get hasTimestamps() {
        return true;
    }

    user() {
        return this.belongsTo("FoodMealUser");
    }
}

module.exports = bookshelf.model("FoodImage", FoodImage);