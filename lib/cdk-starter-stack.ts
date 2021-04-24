import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const existingBucketFromName = s3.Bucket.fromBucketName(
      this,
      'bucket-from-name-id',
      // 👇 Update name here
      'YOUR_BUCKET_NAME',
    );

    console.log(
      'existingBucketFromName 👉 ',
      existingBucketFromName.bucketName,
    );

    const existingTableFromName = dynamodb.Table.fromTableName(
      this,
      'table-from-name-id',
      // 👇 Update name here
      'YOUR_TABLE_NAME',
    );

    console.log('existingTableFromName 👉 ', existingTableFromName.tableName);
  }
}
