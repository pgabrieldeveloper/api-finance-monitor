console.log('URL DATA BASE ' + process.env.DATABASE_URL)
module.exports ={
  "type": "postgres",
  "url":process.env.DATABASE_URL, 
  "entities": ["./build/modules/**/typeorm/entities/*.ts"],
  "migrations": ["./build/shared/typeorm/migrations/*.ts"],
  "cli": {
    "migrationsDir": "./src/shared/typeorm/migrations",
    "subscribers": ["src/subscriber/**/*.ts"]
  }
}
