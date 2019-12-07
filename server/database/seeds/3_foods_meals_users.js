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
          calories: 150
          //cereal
        },
        {
          api_id: 336070,
          meal_type: 1,
          user_id: 1,
          calories: 100
          //milk
        },
        {
          api_id: 341455,
          meal_type: 1,
          user_id: 1,
          calories: 100
          //orange juice
        },
        {
          api_id: 338684,
          meal_type: 2,
          user_id: 1,
          calories: 500
          //Burger King Broiled Chicken Sandwich
        },
        {
          api_id: 170327,
          meal_type: 2,
          user_id: 1,
          calories: 250
          //Burger King French Fries
        },
        {
          api_id: 344475,
          meal_type: 2,
          user_id: 1,
          calories: 500
          //rum and coke
        },
        {
          api_id: 
        }
      ]);
    });
};
