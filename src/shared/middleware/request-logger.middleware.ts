import { Injectable, NestMiddleware, Logger } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  private logger = new Logger("HTTP");
  private appName = process.env.APP_NAME || "courses";

  use(req: Request, res: Response, next: NextFunction) {
    this.logRequest(req);
    res.get;
    res.on("finish", () => this.logResponse(req, res));
    next();
  }

  logRequest(req) {
    try {
      const { ip, method, originalUrl: url, body, query } = req;
      const payload = {
        ip,
        method,
        url,
        body,
        query,
        appName: this.appName,
      };

      this.logger.log(payload);
    } catch (err) {
      console.error(err);
    }
  }

  logResponse(req, res) {
    try {
      const { ip, method, originalUrl: url, body, query } = req;
      const payload = {
        ip,
        method,
        url,
        body,
        query,
        appName: this.appName,
      };

      this.logger.log(payload);
    } catch (err) {
      console.error(err);
    }
  }
}
