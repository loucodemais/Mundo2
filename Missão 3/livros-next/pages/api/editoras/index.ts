import { NextApiRequest, NextApiResponse } from 'next';
import controleEditora from '../../../classes/controle/ControleEditora';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const editora = new controleEditora()
    res.status(200).json(editora.getEditoras());
  } else {
    res.status(405).end('Method Not Allowed');
  }
};

export default handler;