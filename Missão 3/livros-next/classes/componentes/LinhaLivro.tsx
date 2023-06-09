import Livro from '../modelo/Livro';
import ControleEditora from '../controle/ControleEditora';

interface LinhaLivroProps {
    livro: Livro;
    excluir: (index: number) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    const { livro, excluir } = props;
    const controleEditora = new ControleEditora();
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
    return (
        <tr>
            <td>{livro.titulo}<button className="btn btn-danger d-block" onClick={() => excluir(livro.codigo)}>Excluir</button></td>
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
};
