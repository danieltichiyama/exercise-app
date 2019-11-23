
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exercise_difficulties').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercise_difficulties').insert([
        {exercise_difficulty:'easy'},
        {exercise_difficulty:'medium'},
        {exercise_difficulty:'hammah'}
      ]);
    });
};
