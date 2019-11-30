const bookshelf = require('../bookshelf');

class FoodMealUser extends bookshelf.Model {
    get tableName() {
        return 'foods_meals_users';
    }

    get hasTimestamps() {
        return true;
    }

    meal_type_id() {
        return this.hasOne("MealType", "id", "meal_type_id");
    }

    user_id() {
        return this.belongsTo("User");
    }

    foodImage(){
        return this.hasMany("FoodImage");
    }
}

module.exports = bookshelf.model("FoodMealUser", FoodMealUser);