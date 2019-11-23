
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('workouts_exercises').del()
    .then(function () {
      // Inserts seed entries
      return knex('workouts_exercises').insert([
        {
          workout_id: 1,
          exercise_id: 1
        },
        {
          workout_id: 2,
          exercise_id: 2
        },
        {
          workout_id: 3,
          exercise_id: 3
        },
        {
          workout_id: 4,
          exercise_id: 4
        },
        {
          workout_id: 5,
          exercise_id: 5
        },
        {
          workout_id: 6,
          exercise_id: 6
        },
        {
          workout_id: 7,
          exercise_id: 7
        },
        {
          workout_id: 8,
          exercise_id: 8
        },
        {
          workout_id: 9,
          exercise_id: 9
        },
        {
          workout_id: 10,
          exercise_id: 10
        }
      ]);
    });
};
