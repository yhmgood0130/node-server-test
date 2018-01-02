const knex = require('./knex');

module.exports = {
  getAll: function() {
    return knex('log')
  },
  showLog: function(id){
    return knex('log').select().where('id',id)
  }
}
