const bookshelf = require("../bookshelf");

class FoodImage extends bookshelf.Model {
  get tableName() {
    return "food_images";
  }

  get hasTimestamps() {
    return true;
  }

  users_id() {
    return this.hasOne("User", "id", "users_id");
  }

  meal_type_id() {
    return this.hasOne("MealType", "id", "meal_type_id")
  }
}

module.exports = bookshelf.model("FoodImage", FoodImage);
