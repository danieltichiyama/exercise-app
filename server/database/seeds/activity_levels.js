exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        { activity_level: "sedentary", multiplier: 0 },
        { activity_level: "light", multiplier: 1.5 },
        { activity_level: "active", multiplier: 1.75 },
        { activity_level: "very active", multiplier: 2 }
      ]);
    });
};
