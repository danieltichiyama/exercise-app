exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("muscle_groups")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("muscle_groups").insert([
        {
          muscle_group: "Full body"
        },
        {
          muscle_group: "Arms"
        },
        {
          muscle_group: "Legs"
        },
        {
          muscle_group: "Chest"
        },
        {
          muscle_group: "Shoulders"
        },
        {
          muscle_group: "Back"
        },
        {
          muscle_group: "Core"
        }
      ]);
    });
};
