
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('workouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert([
        {
          workout: 'Chest day',
        },
        {
          workout: 'Going hard today',
        },
        {
          workout: 'Leg day',
        },
      ]);
    });
};
