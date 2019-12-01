exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("goals")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("goals").insert([
        { goal: "lose weight mild", caloric_deficit: 250 },
        { goal: "lose weight moderate", caloric_deficit: 500 },
        { goal: "lose weight extreme", caloric_deficit: 750 },
        { goal: "maintain weight", caloric_deficit: 0 },
        { goal: "gain muscle", caloric_deficit: 0 },
        { goal: "no goal", caloric_deficit: 0 }
      ]);
    });
};
