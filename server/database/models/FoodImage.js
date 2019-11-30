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

  foods_meals_users_id() {
    return this.hasOne("FoodMealUser", "id", "foods_meals_users_id")
  }
}

module.exports = bookshelf.model("FoodImage", FoodImage);
