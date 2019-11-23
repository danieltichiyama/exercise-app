
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('muscle_groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('muscle_groups').insert([
        {
          muscle_group: 'full body',
        },
        {
          muscle_group: 'arms',
        },
        {
          muscle_group: 'legs',
        },
        {
          muscle_group: 'chest',
        },
        {
          muscle_group: 'shoulders',
        },
        {
          muscle_group: 'back',
        },
        {
          muscle_group: 'core',
        }
      ]);
    });
};
