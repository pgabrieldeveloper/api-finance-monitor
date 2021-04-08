module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: ['./build/modules/**/typeorm/entities/*.js'],
  migrations: ['./build/shared/typeorm/migrations/*.js'],
  cli: {
    migrationsDir: './src/shared/typeorm/migrations',
  },
};
