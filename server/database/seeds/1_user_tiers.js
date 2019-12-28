exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user_tiers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("user_tiers").insert([
        { tier: "Couch Potato" },
        { tier: "Lazy Boy" },
        { tier: "Getting There" },
        { tier: "Sweatin" },
        { tier: "Killin It" }
      ]);
    });
};
