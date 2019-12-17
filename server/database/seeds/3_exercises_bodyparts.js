exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('exercises_bodyparts').del()
        .then(function () {
            // Inserts seed entries
            return knex('exercises_bodyparts').insert([
                {
                    bodypart_id: 1,
                    exercise_id: 4
                },
                {
                    bodypart_id: 1,
                    exercise_id: 25
                },
                {
                    bodypart_id: 1,
                    exercise_id: 47
                },
                {
                    bodypart_id: 2,
                    exercise_id: 3
                },
                {
                    bodypart_id: 2,
                    exercise_id: 18
                },
                {
                    bodypart_id: 2,
                    exercise_id: 27
                },
                {
                    bodypart_id: 3,
                    exercise_id: 7
                },
                {
                    bodypart_id: 3,
                    exercise_id: 12
                },
                {
                    bodypart_id: 3,
                    exercise_id: 16
                },
                {
                    bodypart_id: 3,
                    exercise_id: 33
                },
                {
                    bodypart_id: 3,
                    exercise_id: 45
                },
                {
                    bodypart_id: 4,
                    exercise_id: 10
                },
                {
                    bodypart_id: 4,
                    exercise_id: 36
                },
                {
                    bodypart_id: 4,
                    exercise_id: 37
                },
                {
                    bodypart_id: 5,
                    exercise_id: 43
                },
                {
                    bodypart_id: 5,
                    exercise_id: 50
                },
                {
                    bodypart_id: 6,
                    exercise_id: 21
                },
                {
                    bodypart_id: 6,
                    exercise_id: 24
                },
                {
                    bodypart_id: 6,
                    exercise_id: 44
                },
                {
                    bodypart_id: 6,
                    exercise_id: 46
                },
                {
                    bodypart_id: 7,
                    exercise_id: 2
                },
                {
                    bodypart_id: 7,
                    exercise_id: 28
                },
                {
                    bodypart_id: 7,
                    exercise_id: 51
                },
                {
                    bodypart_id: 8,
                    exercise_id: 42
                },
                {
                    bodypart_id: 8,
                    exercise_id: 49
                },
                {
                    bodypart_id: 9,
                    exercise_id: 13
                },
                {
                    bodypart_id: 9,
                    exercise_id: 29
                },
                {
                    bodypart_id: 9,
                    exercise_id: 32
                },
                {
                    bodypart_id: 9,
                    exercise_id: 39
                },
                {
                    bodypart_id: 10,
                    exercise_id: 9
                },
                {
                    bodypart_id: 10,
                    exercise_id: 15
                },
                {
                    bodypart_id: 10,
                    exercise_id: 17
                },
                {
                    bodypart_id: 10,
                    exercise_id: 19
                },
                {
                    bodypart_id: 10,
                    exercise_id: 30
                },
                {
                    bodypart_id: 10,
                    exercise_id: 31
                },
                {
                    bodypart_id: 11,
                    exercise_id: 1
                },
                {
                    bodypart_id: 11,
                    exercise_id: 14
                },
                {
                    bodypart_id: 12,
                    exercise_id: 5
                },
                {
                    bodypart_id: 12,
                    exercise_id: 6
                },
                {
                    bodypart_id: 12,
                    exercise_id: 22
                },
                {
                    bodypart_id: 12,
                    exercise_id: 23
                },
                {
                    bodypart_id: 12,
                    exercise_id: 38
                },
                {
                    bodypart_id: 13,
                    exercise_id: 20
                },
                {
                    bodypart_id: 13,
                    exercise_id: 41
                },
                {
                    bodypart_id: 14,
                    exercise_id: 8
                },
                {
                    bodypart_id: 14,
                    exercise_id: 26
                },
                {
                    bodypart_id: 14,
                    exercise_id: 34
                },
                {
                    bodypart_id: 14,
                    exercise_id: 35
                },
                {
                    bodypart_id: 14,
                    exercise_id: 48
                },
                {
                    bodypart_id: 15,
                    exercise_id: 11
                },
                {
                    bodypart_id: 15,
                    exercise_id: 40
                },

            ]);
        });
};