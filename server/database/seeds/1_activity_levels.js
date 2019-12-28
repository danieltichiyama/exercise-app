exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("activity_levels")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("activity_levels").insert([
        { activity_level: "Sedentary", multiplier: 1 },
        { activity_level: "Light", multiplier: 1.5 },
        { activity_level: "Active", multiplier: 1.75 },
        { activity_level: "Very active", multiplier: 2 }
      ]);
    });
};
