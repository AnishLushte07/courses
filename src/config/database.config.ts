import { registerAs } from "@nestjs/config";

export default registerAs("pgDatabase", () => ({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
  autoLoadEntities: true,
  logging: process.env.NODE_ENV === "development",
}));
