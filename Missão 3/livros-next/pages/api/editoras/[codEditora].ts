import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditora from '../../../classes/controle/ControleEditora';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const editora = new ControleEditora()
    const codEditora = Number(req.query.codEditora);
    res.status(200).json({ nome: editora.getNomeEditora(codEditora) });
  } else {
    res.status(405).end('Method Not Allowed');
  }
};

export default handler;
