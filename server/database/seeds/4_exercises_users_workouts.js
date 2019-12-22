
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('exercises_users_workouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercises_users_workouts').insert([
        {
          workout_id: 1,
          exercise_id: 1,
          user_id: 1
        },
        {
          workout_id: 1,
          exercise_id: 2,
          user_id: 1
        },
        {
          workout_id: 1,
          exercise_id: 10,
          user_id: 1
        },
        {
          workout_id: 2,
          exercise_id: 25,
          user_id: 2
        },
        {
          workout_id: 2,
          exercise_id: 15,
          user_id: 2
        },
        {
          workout_id: 2,
          exercise_id: 6,
          user_id: 2
        },
        {
          workout_id: 3,
          exercise_id: 7,
          user_id: 1
        },
        {
          workout_id: 3,
          exercise_id: 8,
          user_id: 1
        },
        {
          workout_id: 3,
          exercise_id: 9,
          user_id: 1
        },
      ]);
    });
};
