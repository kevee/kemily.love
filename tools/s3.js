const AWS = require('aws-sdk')
const http = require('http')
const fs = require('fs')

AWS.config.update({
  accessKeyId: process.env.ENV_ACCESS_KEY_ID,
  secretAccessKey: process.env.ENV_SECRET_ACCESS_KEY,
  region: 'us-east-2',
})

const s3 = new AWS.S3()

s3.listObjectsV2({
  Bucket: 'kemily-love',
})
  .promise()
  .then((content) => {
    content.Contents.forEach((file) => {
      if (fs.existsSync(`./_photos/${file.Key}`)) {
        return
      }
      const path = file.Key.split('/')
      path.pop()
      if (!fs.existsSync(`./_photos/${path.join('/')}`)) {
        fs.mkdirSync(`./_photos/${path.join('/')}`, { recursive: true })
      }
      const localFile = fs.createWriteStream(`./_photos/${file.Key}`)
      http.get(
        `http://kemily-love.s3.us-east-2.amazonaws.com/${file.Key}`,
        function (response) {
          response.pipe(localFile)
          console.log(file.Key)
        }
      )
    })
  })
