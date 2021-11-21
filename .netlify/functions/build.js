const fetch = require('node-fetch')

exports.handler = async function (event, context) {
  fetch({
    url: 'https://api.netlify.com/build_hooks/6199c44abe4542474242b322',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: '{}',
  })
}
