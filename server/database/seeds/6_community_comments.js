
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('community_comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('community_comments').insert([
        {
          comment_body: "Comment one",
          user_id: 1,
          community_post_id: 1
        },
        {
          comment_body: "Comment two",
          user_id: 2,
          community_post_id: 2
        },
        {
          comment_body: "Comment three",
          user_id: 3,
          community_post_id: 3
        }
      ]);
    });
};
