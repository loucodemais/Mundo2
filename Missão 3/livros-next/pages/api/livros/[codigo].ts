import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivros from '../../../classes/controle/ControleLivros';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    const Livro = new ControleLivros();
    const codigo = req.query.codigo as string;
    Livro.excluir(Number(codigo));
    res.status(200).json({ message: 'Livro excluído com sucesso.' });
  } else {
    res.status(405).end('Method Not Allowed');
  }
};

export default handler;
