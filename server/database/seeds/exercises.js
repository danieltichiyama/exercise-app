exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("exercises")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("exercises").insert([
        {
          name: "Voltsillam",
          primary_bodypart_id: 8,
          exercise_type_id: 9,
          exercise_difficulty_id: 1,
          exercise_equipment_id: 4,
          description:
            "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
        },
        {
          name: "Cardify",
          primary_bodypart_id: 10,
          exercise_type_id: 8,
          exercise_difficulty_id: 6,
          exercise_equipment_id: 4,
          description:
            "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
        },
        {
          name: "Andalax",
          primary_bodypart_id: 5,
          exercise_type_id: 5,
          exercise_difficulty_id: 6,
          exercise_equipment_id: 7,
          description:
            "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
        },
        {
          name: "Ronstring",
          primary_bodypart_id: 7,
          exercise_type_id: 4,
          exercise_difficulty_id: 9,
          exercise_equipment_id: 5,
          description:
            "Phasellus in felis. Donec semper sapien a libero. Nam dui."
        },
        {
          name: "Bitchip",
          primary_bodypart_id: 2,
          exercise_type_id: 8,
          exercise_difficulty_id: 9,
          exercise_equipment_id: 2,
          description:
            "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
        },
        {
          name: "Tin",
          primary_bodypart_id: 7,
          exercise_type_id: 7,
          exercise_difficulty_id: 4,
          exercise_equipment_id: 2,
          description:
            "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
        },
        {
          name: "Duobam",
          primary_bodypart_id: 2,
          exercise_type_id: 5,
          exercise_difficulty_id: 1,
          exercise_equipment_id: 8,
          description:
            "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
        },
        {
          name: "Y-Solowarm",
          primary_bodypart_id: 9,
          exercise_type_id: 10,
          exercise_difficulty_id: 1,
          exercise_equipment_id: 9,
          description:
            "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
        },
        {
          name: "Span",
          primary_bodypart_id: 1,
          exercise_type_id: 4,
          exercise_difficulty_id: 2,
          exercise_equipment_id: 4,
          description:
            "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
        },
        {
          name: "Solarbreeze",
          primary_bodypart_id: 1,
          exercise_type_id: 5,
          exercise_difficulty_id: 9,
          exercise_equipment_id: 9,
          description:
            "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
        }
      ]);
    });
};
