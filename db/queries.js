const knex = require('knex');

module.exports = {
  getLog: function() {
    return knex('log')
  }
}
