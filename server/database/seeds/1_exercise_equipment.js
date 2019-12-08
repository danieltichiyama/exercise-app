exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("exercise_equipment")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("exercise_equipment").insert([
        { exercise_equipment: "Cables" },
        { exercise_equipment: "Freeweights" },
        { exercise_equipment: "Barbell" },
        { exercise_equipment: "Swissball" },
        { exercise_equipment: "Bodyweight" },
        { exercise_equipment: "Machine" },
        { exercise_equipment: "Other" }
      ]);
    });
};
