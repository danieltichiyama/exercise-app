exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("user_tiers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user_tiers").insert([
        { tier: "couch potato" },
        { tier: "lazy boy" },
        { tier: "getting there" },
        { tier: "sweatin" },
        { tier: "killin it" }
      ]);
    });
};
