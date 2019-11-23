
exports.up = function (knex) {
    return knex.schema.createTable("muscle_groups", table => {
        table.increments();
        table.string("muscle_group");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("muscle_groups");
};
