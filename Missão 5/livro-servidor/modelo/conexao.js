const { connect, connection, Schema } = require('mongoose');

const banco = connection;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

connect('mongodb://localhost:27017/nome-do-banco', options);

module.exports = banco;
