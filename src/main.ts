import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule } from "@nestjs/swagger";
import * as helmet from "helmet";

import { AppModule } from "./app.module";
import { AllExceptionsFilter } from "./shared/filter";
// import { LoggerModule } from "./shared/logger/pino.logger.module";
import { PinoLogger } from "./shared/logger/pino.logger.service";
// import { requestLogger } from "./shared/middleware";
import { SharedModule } from "./shared/shared.module";
import { createDocument } from "./swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // bufferLogs: true,
  });
  app.useLogger(app.select(SharedModule).get(PinoLogger));
  app.use(helmet());
  app.useGlobalFilters(new AllExceptionsFilter());
  // app.use(requestLogger);
  const configService = app.get(ConfigService);

  SwaggerModule.setup("api", app, createDocument(app));

  // Starts listening for shutdown hooks
  // app.enableShutdownHooks();

  await app.listen(configService.get("port")).catch((err) => console.log(err));
}

bootstrap();
