
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('food_images').del()
    .then(function () {
      // Inserts seed entries
      return knex('food_images').insert([
        {
          url: 'rowValue1',
          users_id: 1,
          meal_type_id: 1
        },
        {
          url: 'rowValue2',
          users_id: 2,
          meal_type_id: 2
        },
        {
          url: 'rowValue3',
          users_id: 3,
          meal_type_id: 3
        },
        {
          url: 'rowValue3',
          users_id: 4,
          meal_type_id: 4
        },
        {
          url: 'rowValue3',
          users_id: 5,
          meal_type_id: 1
        },
        {
          url: 'rowValue3',
          users_id: 6,
          meal_type_id: 2
        },
        {
          url: 'rowValue3',
          users_id: 7,
          meal_type_id: 3
        },
        {
          url: 'rowValue3',
          users_id: 8,
          meal_type_id: 4
        },
        {
          url: 'rowValue3',
          users_id: 9,
          meal_type_id: 1
        },
        {
          url: 'rowValue3',
          users_id: 10,
          meal_type_id: 2
        },
      ]);
    });
};
