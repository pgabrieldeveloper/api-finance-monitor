module.exports = {
  type: 'postgres',
  url: 'postgres://postgres:docker@localhost:5432/apimoney',
  entities: ['./build/modules/**/typeorm/entities/*.js'],
  migrations: ['./build/shared/typeorm/migrations/*.js'],
  cli: {
    migrationsDir: './src/shared/typeorm/migrations',
  },
};
