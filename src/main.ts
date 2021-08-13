import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { LoggerModule } from "./shared/logger/pino.logger.module";
import { PinoLogger } from "./shared/logger/pino.logger.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // bufferLogs: true,
  });
  app.useLogger(app.get(PinoLogger));
  const configService = app.get(ConfigService);
  await app.listen(configService.get("port")).catch((err) => console.log(err));
}
bootstrap();
