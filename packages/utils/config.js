import AWS from "aws-sdk";

const s3 = new AWS.S3();

export const getConfigFromS3 = async () => {
  try {
    const response = await s3
      .getObject({
        Bucket: process.env.CONFIG_BUCKET_NAME,
        Key: process.env.CONFIG_OBJECT_KEY,
      })
      .promise();
    return JSON.parse(response.Body);
  } catch (error) {
    console.error(error);
    console.log(
      `Cannot load config from S3. Bucket: ${process.env.CONFIG_BUCKET_NAME}, Key: ${process.env.CONFIG_OBJECT_KEY}`
    );
    throw new Error(`Cannot load config from S3`);
  }
};
