module.exports = {
  development: {
    client: pg,
    connection: 'postgres://localhost/logentry'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
