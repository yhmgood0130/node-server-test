
exports.up = function(knex, Promise) {

  return knex.schema.createTable('log', (table) => {
    table.increments();
    table.text("Name");
    table.text("AuthKey");
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('log');

};
