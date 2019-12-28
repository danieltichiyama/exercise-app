
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('genders').del()
    .then(function () {
      // Inserts seed entries
      return knex('genders').insert([
        {
          gender: 'Male',
        },
        {
          gender: 'Female',
        },
        {
          gender: 'Other',
        }
      ]);
    });
};
