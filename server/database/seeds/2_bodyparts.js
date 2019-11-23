
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bodyparts').del()
    .then(function () {
      // Inserts seed entries
      return knex('bodyparts').insert([
        {
          bodypart: 'glutes',
          muscle_group_id: 1
        },
        {
          bodypart: 'biceps',
          muscle_group_id: 2
        },
        {
          bodypart: 'triceps',
          muscle_group_id: 3
        },
        {
          bodypart: 'lats',
          muscle_group_id: 4
        },
        {
          bodypart: 'traps',
          muscle_group_id: 5
        },
        {
          bodypart: 'shoulders',
          muscle_group_id: 6
        },
        {
          bodypart: 'hamstrings',
          muscle_group_id: 6
        },
        {
          bodypart: 'calves',
          muscle_group_id: 7
        },
        {
          bodypart: 'abs',
          muscle_group_id: 7
        },
        {
          bodypart: 'chest',
          muscle_group_id: 7
        }
      ]);
    });
};
