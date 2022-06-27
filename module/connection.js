const { Client } = require('@elastic/elasticsearch');
const client = new Client({
  node: 'http://localhost:19200',
  auth: {
    username: 'elastic',   //elasticsearch의 주소 
    password: '123!@#qwe'
  }
})
module.exports = client;  