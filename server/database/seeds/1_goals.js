exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("goals")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("goals").insert([
        { goal: "lose weight mild" },
        { goal: "lose weight moderate" },
        { goal: "lose weight extreme" },
        { goal: "maintain weight" },
        { goal: "gain muscle" },
        { goal: "no goal" }
      ]);
    });
};
