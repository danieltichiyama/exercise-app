exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("activity_levels")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("activity_levels").insert([
        { activity_level: "sedentary", multiplier: 1 },
        { activity_level: "light", multiplier: 1.5 },
        { activity_level: "active", multiplier: 1.75 },
        { activity_level: "very active", multiplier: 2 }
      ]);
    });
};
