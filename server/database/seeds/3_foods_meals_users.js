exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("foods_meals_users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("foods_meals_users").insert([
        {
          api_id: 340635,
          meal_type_id: 1,
          user_id: 1,
          calories: 150,
          servings: 1,
          description: "Kashi GoLean",
          protein: 6,
          fat: 2,
          carbs: 22,
          serving_size: "58g"

          //cereal
        },
        {
          api_id: 336070,
          meal_type_id: 1,
          user_id: 1,
          calories: 100,
          servings: 1,
          description: "Milk",
          protein: 2,
          fat: 5,
          carbs: 6,
          serving_size: "100ml"
          //milk
        },
        {
          api_id: 341455,
          meal_type_id: 1,
          user_id: 1,
          calories: 100,
          servings: 1,
          description: "Orange Juice",
          protein: 0,
          fat: 0,
          carbs: 25,
          serving_size: "80fl oz"
          //orange juice
        },
        {
          api_id: 338684,
          meal_type_id: 2,
          user_id: 1,
          calories: 500,
          servings: 1,
          description: "Broiled Chicken Sandwich, Burger King",
          protein: 14,
          fat: 8,
          carbs: 40,
          serving_size: "1 sandwich"
          //Burger King Broiled Chicken Sandwich
        },
        {
          api_id: 170327,
          meal_type_id: 2,
          user_id: 1,
          calories: 250,
          servings: 1,
          description: "French fries, Burger King",
          protein: 0,
          fat: 6,
          carbs: 22,
          serving_size: "1 small"

          //Burger King French Fries
        },
        {
          api_id: 344475,
          meal_type_id: 2,
          user_id: 1,
          calories: 500,
          servings: 1,
          description: "Rum and Coke",
          protein: 0,
          fat: 0,
          carbs: 30,
          serving_size: "24 fl oz"

          //rum and coke
        },
        {
          api_id: 338406,
          meal_type_id: 3,
          user_id: 1,
          calories: 300,
          servings: 1,
          description: "Steak, ribeye",
          protein: 18,
          fat: 6,
          carbs: 2,
          serving_size: "8oz"

          //steak
        }
      ]);
    });
};
