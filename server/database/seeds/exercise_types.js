
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exercise_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercise_type').insert([
        {exercise_type: 'cardio'},
        {exercise_type: 'strength training'},
        {exercise_type: 'flexibility'}
      ]);
    });
};
