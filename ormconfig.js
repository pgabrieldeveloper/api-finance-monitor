const host = process.env.DATABASE_HOST;
const username = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const port = process.env.PORT;
const database = process.env.DATABASE;

module.exports = {
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  entities: ['./src/modules/**/typeorm/entities/*.ts'],
  migrations: ['./src/shared/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: './src/shared/typeorm/migrations',
    subscribers: ['src/subscriber/**/*.ts'],
  },
};
