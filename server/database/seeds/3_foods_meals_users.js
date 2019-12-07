exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("foods_meals_users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("foods_meals_users").insert([
        {
          api_id: 209592,
          meal_type_id: 1,
          user_id: 1
        },
        {
          api_id: 683503,
          meal_type_id: 2,
          user_id: 1
        },
        {
          api_id: 817528,
          meal_type_id: 3,
          user_id: 1
        },
        {
          api_id: 311877,
          meal_type_id: 4,
          user_id: 1
        },
        {
          api_id: 698889,
          meal_type_id: 1,
          user_id: 2
        },
        {
          api_id: 131312,
          meal_type_id: 1,
          user_id: 2
        },
        {
          api_id: 951821,
          meal_type_id: 4,
          user_id: 3
        },
        {
          api_id: 306276,
          meal_type_id: 4,
          user_id: 3
        },
        {
          api_id: 467763,
          meal_type_id: 1,
          user_id: 5
        },
        {
          api_id: 178699,
          meal_type_id: 2,
          user_id: 8
        }
      ]);
    });
};
