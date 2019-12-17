exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("community_posts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("community_posts").insert([
        {
          title: "Feeling Good",
          body: "Killing this new diet.  Who else is on the keto bandwagon?",
          user_id: 1
        },
        {
          title: "Awesome workout!",
          body: "Awesome workout, killed it!",
          user_id: 2
        },
        {
          title: "Burpees",
          body: "Never doing burpees again...until next week.",
          user_id: 3
        },
        {
          title: "Check out this salaaaad...",
          body:
            "Tastes pretty good, especially considering I didn't have any lettuce.",
          food_images_id: 1,
          user_id: 4
        }
      ]);
    });
};
