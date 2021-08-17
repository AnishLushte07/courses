import * as aws from "aws-sdk";

import { Injectable } from "@nestjs/common";

export interface AWS {
  _awsParent: any;
}

@Injectable()
export class AWS {
  constructor() {
    this._awsParent = aws;
    this.init();
  }

  init() {
    this._awsParent.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_S3_REGION,
    });
  }
}
