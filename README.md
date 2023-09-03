# How to Import Existing Resources in AWS CDK

A repository for an article on
[bobbyhadz.com](https://bobbyhadz.com/blog/aws-cdk-import-existing-s3-bucket)

> If you use CDK v1, switch to the cdk-v1 branch

## How to Use

1. Clone the repository

2. Install the dependencies

```bash
npm install
```

3. Replace the values of the `Dynamodb table Name` and `S3 bucket name` in
   `lib/cdk-starter-stack.ts`

4. Synthesize the stack and see the resources have been imported successfully

```bash
npx aws-cdk synth
```
