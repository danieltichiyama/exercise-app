
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exercise_equipment').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercise_equipment').insert([
        {exercise_equipment: 'cables'},
        {exercise_equipment: 'freeweights'},
        {exercise_equipment: 'barbell'},
        {exercise_equipment: 'swissball'},
        {exercise_equipment: 'bodyweight'},
        {exercise_equipment: 'machine'},
      ]);
    });
};
