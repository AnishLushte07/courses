export interface SqsService {
  type: string;
  sqsUrl: string;
  handler?: (data: any) => Promise<any>;
  generateSQSParams: (messageType: string, message: any) => any;
  sqs: any;
}
