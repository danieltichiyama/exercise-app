exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("goals")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("goals").insert([
        { goal: "Lose Weight Mild", caloric_deficit: 250 },
        { goal: "Lose Weight Moderate", caloric_deficit: 500 },
        { goal: "Lose Weight Extreme", caloric_deficit: 750 },
        { goal: "Maintain Weight", caloric_deficit: 0 },
        { goal: "Gain Muscle", caloric_deficit: 0 },
        { goal: "No Goal", caloric_deficit: 0 }
      ]);
    });
};
