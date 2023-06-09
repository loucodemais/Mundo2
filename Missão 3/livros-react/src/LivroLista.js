import React, { useState, useEffect } from 'react';
import ControleLivros from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';
import 'bootstrap/dist/css/bootstrap.css';

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        const obterLivros = async () => {
          const livrosObtidos = await controleLivro.obterLivros();
          setLivros(livrosObtidos);
          setCarregado(true);
        };
    
        if (!carregado) {
          obterLivros();
        }
      }, [carregado]);

      const excluir = (codigo) => {
        controleLivro.excluir(codigo);
        setCarregado(false);
      };
    
      return (
        <main class="w-75 mx-auto">
            <h1>Catálogo de Livros</h1>
            <table class="table-striped w-100">
                <thead>
                    <tr class="bg-dark text-white">
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
        </main>
      );
    }

const LinhaLivro = ({ livro, excluir }) => {
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
    return (
        <tr>
            <td>{livro.titulo}<button class="btn btn-danger d-block" onClick={() => excluir(livro.codigo)}>Excluir</button></td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                {livro.autores.map((autor, index) => (
                    <li key={index}>{autor}</li>
                ))}
                </ul>
            </td>
        </tr>
    )
}

export default LivroLista;
