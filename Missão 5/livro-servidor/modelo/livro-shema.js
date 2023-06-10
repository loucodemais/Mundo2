const banco = require('./conexao');

const LivroSchema = new banco.Schema({
  // Defina a estrutura do seu esquema de livro aqui
});

const Livro = banco.model('livros', LivroSchema);

module.exports = Livro;
