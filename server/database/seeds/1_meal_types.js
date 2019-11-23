
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('meal_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('meal_types').insert([
        {meal_type: 'breakfast'},
        {meal_type: 'lunch'},
        {meal_type: 'dinner'},
        {meal_type: 'snack'}
      ]);
    });
};
