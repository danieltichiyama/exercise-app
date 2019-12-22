
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('exercise_difficulties').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercise_difficulties').insert([
        {
          exercise_difficulty: 'Light',
          exercise_multiplier: 3.5
        },
        {
          exercise_difficulty: 'Moderate',
          exercise_multiplier: 5
        },
        {
          exercise_difficulty: 'Vigorous',
          exercise_multiplier: 8
        }
      ]);
    });
};
