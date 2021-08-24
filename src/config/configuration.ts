export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  log_level: "info",
  environment: process.env.NODE_ENV || "development",
  app_name: process.env.APP_NAME || "courses",
});
