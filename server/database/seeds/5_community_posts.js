
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('community_posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('community_posts').insert([
        {
          title: 1,
          body: 1,
          user_id: 1,
          user_video_id: 1,
          food_images_id: 1,
          exercise_id: 1
        },
        {
          title: 2,
          body: 2,
          user_id: 2,
          user_video_id: 2,
          food_images_id: 2,
          exercise_id: 2
        },
        {
          title: 3,
          body: 3,
          user_id: 3,
          user_video_id: 3,
          food_images_id: 3,
          exercise_id: 3
        }
      ]);
    });
};
