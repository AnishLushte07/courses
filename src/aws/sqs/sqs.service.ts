import { AWS } from "../aws";
import { Consumer } from "sqs-consumer";
// import { Injectable } from "@nestjs/common";
// import { Scope } from "@nestjs/common";

export class SqsService extends AWS {
  private generateSQSParams: (messageType: string, message: any) => any;
  private sqs: any;

  constructor(public type, public sqsUrl, public handler) {
    super();
    console.log("AWS sqs initiated", type, sqsUrl, handler);
    this.sqs = new this._awsParent.SQS();
    this.sqsUrl = sqsUrl;
    if (type === "CONSUMER") {
      this.handler = handler;
      this.registerConsumer();
    }
  }

  registerConsumer() {
    const app = Consumer.create({
      queueUrl: this.sqsUrl,
      //   waitTimeSeconds: +process.env.SQS_WAIT_TIME,
      //   visibilityTimeout: process.env.SQS_VISIBILITY_TIMOUT,
      handleMessage: async (data) => {
        console.log(data);
        try {
          const obj = JSON.parse(data.Body);

          await this.handler(obj.data);

          return;
        } catch (err) {
          console.log(err);
          return Promise.reject(err);
        }
      },
    });

    app.start();
  }

  sendMessage(messageType, message) {
    const params = this.generateSQSParams(messageType, message);
    try {
      this.sqs.sendMessage(params, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  generateSQSBody(messageType, message) {
    const messageBody = {
      type: messageType,
      data: message ? message : undefined,
    };

    const param = {
      QueueUrl: this.sqsUrl,
      MessageBody: JSON.stringify(messageBody),
    };

    return param;
  }
}
