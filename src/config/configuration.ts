export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  mongo_database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
  log_level: "info",
  environment: process.env.NODE_ENV || "development",
});
