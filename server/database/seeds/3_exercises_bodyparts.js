
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exercises_bodyparts').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercises_bodyparts').insert([
        {
          exercise_id: 1,
          bodypart_id: 1
        },
        {
          exercise_id: 2,
          bodypart_id: 1
        },
        {
          exercise_id: 3,
          bodypart_id: 3
        },
        {
          exercise_id: 4,
          bodypart_id: 4
        },
        {
          exercise_id: 5,
          bodypart_id: 5
        },
        {
          exercise_id: 6,
          bodypart_id: 6
        },
        {
          exercise_id: 7,
          bodypart_id: 7
        },
        {
          exercise_id: 8,
          bodypart_id: 8
        },
        {
          exercise_id: 9,
          bodypart_id: 9
        },
        {
          exercise_id: 10,
          bodypart_id: 10
        }
      ]);
    });
};
