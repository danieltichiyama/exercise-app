
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bodyparts').del()
    .then(function () {
      // Inserts seed entries
      return knex('bodyparts').insert([
        {
          bodypart: 'glutes'
        },
        {
          bodypart: 'biceps'
        },
        {
          bodypart: 'triceps'
        },
        {
          bodypart: 'lats'
        },
        {
          bodypart: 'traps'
        },
        {
          bodypart: 'shoulders'
        },
        {
          bodypart: 'hamstrings'
        },
        {
          bodypart: 'calves'
        },
        {
          bodypart: 'abs'
        },
        {
          bodypart: 'chest'
        }
      ]);
    });
};
