const bookshelf = require('../bookshelf');

class FoodMealUser extends bookshelf.Model {
    get tableName() {
        return 'foods_meals_users';
    }

    get hasTimestamps() {
        return true;
    }

    mealType() {
        return this.hasOne("MealType", "id", "meal_type_id");
    }

    user() {
        return this.belongsTo("User");
    }
}

module.exports = bookshelf.model("FoodMealUser", FoodMealUser);