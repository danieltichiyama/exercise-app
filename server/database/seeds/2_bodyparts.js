exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("bodyparts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("bodyparts").insert([
        {
          bodypart: "Glutes",
          muscle_group_id: 3
        },
        {
          bodypart: "Biceps",
          muscle_group_id: 2
        },
        {
          bodypart: "Triceps",
          muscle_group_id: 2
        },
        {
          bodypart: "Lats",
          muscle_group_id: 6
        },
        {
          bodypart: "Traps",
          muscle_group_id: 5
        },
        {
          bodypart: "Shoulders",
          muscle_group_id: 5
        },
        {
          bodypart: "Hamstrings",
          muscle_group_id: 3
        },
        {
          bodypart: "Calves",
          muscle_group_id: 3
        },
        {
          bodypart: "Abs",
          muscle_group_id: 7
        },
        {
          bodypart: "Chest",
          muscle_group_id: 7
        },
        {
          bodypart: "Lower back",
          muscle_group_id: 6
        },
        {
          bodypart: "Forearms",
          muscle_group_id: 2
        },
        {
          bodypart: "Mid back",
          muscle_group_id: 6
        },
        {
          bodypart: "Quads",
          muscle_group_id: 3
        },
        {
          bodypart: "Deltoids",
          muscle_group_id: 5
        }
      ]);
    });
};
