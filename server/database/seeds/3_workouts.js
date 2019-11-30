
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('workouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert([
        {
          workout: 'abc',
          user_id: 1
        },
        {
          workout: 'abc',
          user_id: 2
        },
        {
          workout: 'abc',
          user_id: 3
        },
        {
          workout: 'abc',
          user_id: 4
        },
        {
          workout: 'abc',
          user_id: 5
        },
        {
          workout: 'abc',
          user_id: 6
        },
        {
          workout: 'abc',
          user_id: 7
        },
        {
          workout: 'abc',
          user_id: 8
        },
        {
          workout: 'abc',
          user_id: 9
        },
        {
          workout: 'abc',
          user_id: 10
        }
      ]);
    });
};
