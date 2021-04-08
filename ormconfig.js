const host = process.env.DATABASE_HOST;
const username = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const port = process.env.DATABASE_PORT;
const database = process.env.DATABASE;
module.exports = {
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  entities: ['./dist/modules/**/typeorm/entities/*.js'],
  migrations: ['./dist/shared/typeorm/migrations/*.js'],
  cli: {
    migrationsDir: './src/shared/typeorm/migrations',
    subscribers: ['src/subscriber/**/*.ts'],
  },
};
