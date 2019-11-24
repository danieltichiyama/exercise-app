const bookshelf = require('../bookshelf');

class MealType extends bookshelf.Model {
    get tableName() {
        return "meal_types";
    }

    get hasTimestamps() {
        return true;
    }

    foodsMealsUsers() {
        return this.hasMany("FoodMealUser");
    }
}

module.exports = bookshelf.model("MealType", MealType);