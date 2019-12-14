exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("meal_types")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("meal_types").insert([
        { meal_type: "Breakfast" },
        { meal_type: "Lunch" },
        { meal_type: "Dinner" },
        { meal_type: "Snack" }
      ]);
    });
};
