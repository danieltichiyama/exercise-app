
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('food_images').del()
    .then(function () {
      // Inserts seed entries
      return knex('food_images').insert([
        {
          url: 'rowValue1',
          users_id: 1,
          foods_meals_users_id: 1
        },
        {
          url: 'rowValue2',
          users_id: 2,
          foods_meals_users_id: 2
        },
        {
          url: 'rowValue3',
          users_id: 3,
          foods_meals_users_id: 3
        },
        {
          url: 'rowValue3',
          users_id: 4,
          foods_meals_users_id: 4
        },
        {
          url: 'rowValue3',
          users_id: 5,
          foods_meals_users_id: 1
        },
        {
          url: 'rowValue3',
          users_id: 6,
          foods_meals_users_id: 2
        },
        {
          url: 'rowValue3',
          users_id: 7,
          foods_meals_users_id: 3
        },
        {
          url: 'rowValue3',
          users_id: 8,
          foods_meals_users_id: 4
        },
        {
          url: 'rowValue3',
          users_id: 9,
          foods_meals_users_id: 1
        },
        {
          url: 'rowValue3',
          users_id: 10,
          foods_meals_users_id: 2
        },
      ]);
    });
};
