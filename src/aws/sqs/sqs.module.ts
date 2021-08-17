import { Global } from "@nestjs/common";
import { DynamicModule } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { SqsService } from "src/aws/sqs/sqs.service";

// const sqsFactory = {
//   provide: "SQSFACTORY",
//   useFactory: () => {
//     return new SqsService("CONSUMER", "asdad", () => console.log(1));
//   },
// };

@Module({})
export class SqsModule {
  static register(): DynamicModule {
    return {
      module: SqsModule,
      providers: [SqsService],
      exports: [SqsService],
    };
  }
}
