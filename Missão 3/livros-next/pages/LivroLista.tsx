import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu } from '../classes/componentes/Menu';
import Livro from '../classes/modelo/Livro';
import { LinhaLivro } from '../classes/componentes/LinhaLivro';
import styles from '../styles/Home.module.css';
import '../styles/globals.css'

const baseURL = 'http://localhost:3000/api/livros';

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  const obterLivros = async () => {
    try {
      const response = await fetch(baseURL);
      const data = await response.json();
      setLivros(data);
    } catch (error) {
      console.error('Erro ao obter os livros:', error);
    } finally {
      setCarregado(true);
    }
  };

  const excluirLivro = async (codigo: number) => {
    try {
      const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
      return response.ok;
    } catch (error) {
      console.error('Erro ao excluir o livro:', error);
      return false;
    }
  };

  useEffect(() => {
    obterLivros();
  }, [carregado]);

  const excluir = async (codigo: number) => {
    setCarregado(false);
    await excluirLivro(codigo);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Lista de Livros</title>
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title2}>Livros</h1>

        {carregado ? (
          <table className="table table-striped w-75">
            <thead>
            <tr className="table-dark">
              <td style={{padding: "15px"}}>Título</td>
              <td style={{padding: "15px"}}>Resumo</td>
              <td style={{padding: "15px"}}>Editora</td>
              <td style={{padding: "15px"}}>Autores</td>
          </tr>
            </thead>
            <tbody>
              {livros.map((livro) => (
                <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
              ))}
            </tbody>
          </table>
        ) : (
          <p>Carregando...</p>
        )}
      </main>
    </div>
  );
};

export default LivroLista;
