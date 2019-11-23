
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('genders').del()
    .then(function () {
      // Inserts seed entries
      return knex('genders').insert([
        {
          gender: 'male',
        },
        {
          gender: 'female',
        },
        {
          gender: 'other',
        }
      ]);
    });
};
