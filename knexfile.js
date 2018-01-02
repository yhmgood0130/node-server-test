module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'ballack13',
      database: 'logentries'
  }
  },

  production: {
    client: 'mysql',
    connection: process.env.DATABASE_URL
  }
};
