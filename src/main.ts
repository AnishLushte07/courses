import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
// import { LoggerModule } from "./shared/logger/pino.logger.module";
import { PinoLogger } from "./shared/logger/pino.logger.service";
import { SharedModule } from "./shared/shared.module";
import { createDocument } from "./swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // bufferLogs: true,
  });
  app.useLogger(app.select(SharedModule).get(PinoLogger));
  const configService = app.get(ConfigService);

  SwaggerModule.setup("api", app, createDocument(app));
  await app.listen(configService.get("port")).catch((err) => console.log(err));
}
bootstrap();
