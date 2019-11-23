exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("user_videos")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user_videos").insert([
        {
          url: "http://dummyimage.com/203x245.bmp/ff4444/ffffff",
          user_id: 6,
          exercise_id: 10,
          description:
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
        },
        {
          url: "http://dummyimage.com/130x226.bmp/cc0000/ffffff",
          user_id: 10,
          exercise_id: 10,
          description:
            "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
        },
        {
          url: "http://dummyimage.com/177x140.bmp/ff4444/ffffff",
          user_id: 9,
          exercise_id: 8,
          description:
            "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
        },
        {
          url: "http://dummyimage.com/140x218.bmp/dddddd/000000",
          user_id: 7,
          exercise_id: 4,
          description:
            "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
        },
        {
          url: "http://dummyimage.com/106x222.jpg/5fa2dd/ffffff",
          user_id: 10,
          exercise_id: 8,
          description:
            "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
        },
        {
          url: "http://dummyimage.com/178x131.png/dddddd/000000",
          user_id: 10,
          exercise_id: 1,
          description:
            "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
        },
        {
          url: "http://dummyimage.com/115x189.bmp/ff4444/ffffff",
          user_id: 4,
          exercise_id: 5,
          description:
            "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        },
        {
          url: "http://dummyimage.com/230x104.jpg/5fa2dd/ffffff",
          user_id: 3,
          exercise_id: 8,
          description:
            "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
        },
        {
          url: "http://dummyimage.com/176x115.jpg/5fa2dd/ffffff",
          user_id: 4,
          exercise_id: 6,
          description:
            "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        },
        {
          url: "http://dummyimage.com/112x180.jpg/dddddd/000000",
          user_id: 9,
          exercise_id: 5,
          description:
            "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
        }
      ]);
    });
};
