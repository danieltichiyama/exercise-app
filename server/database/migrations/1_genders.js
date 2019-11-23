
exports.up = function (knex) {
    return knex.schema.createTable("genders", table => {
        table.increments();
        table.string("gender");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("genders");
};
