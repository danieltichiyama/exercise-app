const bookshelf = require('../bookshelf');

class FoodMealUser extends bookshelf.Model {
    get tableName() {
        return 'foods_meals_users';
    }

    get hasTimestamps() {
        return true;
    }

    food_image_id(){
        return this.hasOne("FoodImage", "id", "foods_meals_users_id");
    }
    meal_type_id() {
        return this.hasOne("MealType", "id", "meal_type_id");
    }

    user_id() {
        return this.belongsTo("User");
    }

}

module.exports = bookshelf.model("FoodMealUser", FoodMealUser);