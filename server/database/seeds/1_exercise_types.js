exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("exercise_types")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("exercise_types").insert([
        { exercise_type: "Cardio" },
        { exercise_type: "Strength" },
        { exercise_type: "Flexibility" }
      ]);
    });
};
