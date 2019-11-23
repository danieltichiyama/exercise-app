exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tutorial_videos")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tutorial_videos").insert([
        {
          url: "http://dummyimage.com/156x234.png/5fa2dd/ffffff",
          exercise_id: 9
        },
        {
          url: "http://dummyimage.com/102x219.bmp/dddddd/000000",
          exercise_id: 5
        },
        {
          url: "http://dummyimage.com/110x186.jpg/cc0000/ffffff",
          exercise_id: 10
        },
        {
          url: "http://dummyimage.com/211x196.bmp/dddddd/000000",
          exercise_id: 1
        },
        {
          url: "http://dummyimage.com/174x217.png/5fa2dd/ffffff",
          exercise_id: 1
        },
        {
          url: "http://dummyimage.com/147x151.jpg/cc0000/ffffff",
          exercise_id: 1
        },
        {
          url: "http://dummyimage.com/143x168.jpg/ff4444/ffffff",
          exercise_id: 7
        },
        {
          url: "http://dummyimage.com/226x104.jpg/dddddd/000000",
          exercise_id: 3
        },
        {
          url: "http://dummyimage.com/146x234.jpg/5fa2dd/ffffff",
          exercise_id: 9
        },
        {
          url: "http://dummyimage.com/182x242.jpg/dddddd/000000",
          exercise_id: 4
        }
      ]);
    });
};
