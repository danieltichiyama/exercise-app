exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("community_comments")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("community_comments").insert([
        {
          comment_body: "Oh oh, me!",
          user_id: 3,
          community_post_id: 1
        },
        {
          comment_body: "Dude, you're so crazy. best of luck.",
          user_id: 4,
          community_post_id: 1
        },
        {
          comment_body: "Nice!",
          user_id: 5,
          community_post_id: 2
        },
        {
          comment_body: "Yeah, thanks. Tomorrow?",
          user_id: 2,
          community_post_id: 2
        },
        {
          comment_body: "I'm down, what time?",
          user_id: 5,
          community_post_id: 2
        },
        {
          comment_body: "Bro, I know!",
          user_id: 1,
          community_post_id: 3
        },
        {
          comment_body: "Looks good.  Gimme some.",
          user_id: 3,
          community_post_id: 4
        },
        {
          comment_body: "Wow, what kind of dressing did you use?",
          user_id: 5,
          community_post_id: 4
        }
      ]);
    });
};
