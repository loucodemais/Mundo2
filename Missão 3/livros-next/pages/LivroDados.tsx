import { useState } from 'react';
import Head from 'next/head';
import { Menu } from '../classes/componentes/Menu';
import ControleEditora from '../classes/controle/ControleEditora';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import Livro from '../classes/modelo/Livro';
import '../styles/globals.css'
import Script from 'next/script';

const controleEditora = new ControleEditora();
const baseURL = 'http://localhost:3000/api/livros';

const LivroDados: React.FC = () => {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(1);

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const navigate = useRouter().push;

  const incluirLivro = async (livro: Livro) => {
    try {
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(livro),
      });
      return response.ok;
    } catch (error) {
      console.error('Erro ao incluir o livro:', error);
      return false;
    }
  };

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(event.target.value);
    setCodEditora(value);
  };

  const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const livro: Livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };

    const success = await incluirLivro(livro);

    if (success) {
      navigate('/LivroLista');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Cadastrar Livro</title>
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title2}>Cadastrar Livro</h1>

        <form className='w-75' onSubmit={incluir}>
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">Título</label>
            <input type="text" className="form-control" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} required/>
          </div>

          <div className="mb-3">
            <label htmlFor="resumo" className="form-label">Resumo</label>
            <textarea className="form-control" id="resumo" value={resumo} onChange={(e) => setResumo(e.target.value)} required></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="editora" className="form-label">Editora</label>
            <select className="form-select" id="editora" value={codEditora} onChange={tratarCombo} required>
              {opcoes.map(opcao => (
                <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="autores" className="form-label">Autores (um por linha)</label>
            <textarea className="form-control" id="autores" value={autores} onChange={(e) => setAutores(e.target.value)} required></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Incluir</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
