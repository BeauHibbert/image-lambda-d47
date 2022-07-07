const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = async (event) => {
    
   let bucketName = event.Records[0].s3.bucket.name
    
    let key = 'images.json';
    
    let object = await s3.getObject({Bucket: bucketName, Key: key}).promise();
    let json = JSON.parse(object.Body.toString());
    
    let image1 = json.images[0];
    let image2 = json.images[1];

    console.log(json);
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(image1),
    };
    return response;
};
