exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("exercises_users_workouts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("exercises_users_workouts").insert([
        {
          workout_id: 1,
          exercise_id: 1,
          user_id: 1,
          exercise_duration: 15,
          calories_burned: 50
        },
        {
          workout_id: 1,
          exercise_id: 2,
          user_id: 1,
          exercise_duration: 15,
          calories_burned: 50
        },
        {
          workout_id: 1,
          exercise_id: 10,
          user_id: 1,
          exercise_duration: 20,
          calories_burned: 60
        },
        {
          workout_id: 2,
          exercise_id: 25,
          user_id: 2,
          exercise_duration: 10,
          calories_burned: 80
        },
        {
          workout_id: 2,
          exercise_id: 15,
          user_id: 2,
          exercise_duration: 35,
          calories_burned: 120
        },
        {
          workout_id: 2,
          exercise_id: 6,
          user_id: 2,
          exercise_duration: 15,
          calories_burned: 60
        },
        {
          workout_id: 3,
          exercise_id: 7,
          user_id: 1,
          exercise_duration: 19,
          calories_burned: 48
        },
        {
          workout_id: 3,
          exercise_id: 8,
          user_id: 1,
          exercise_duration: 9,
          calories_burned: 26
        },
        {
          workout_id: 3,
          exercise_id: 9,
          user_id: 1,
          exercise_duration: 4,
          calories_burned: 21
        }
      ]);
    });
};
