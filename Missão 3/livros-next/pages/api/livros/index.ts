import { NextApiRequest, NextApiResponse } from 'next';
import controleLivros from '../../../classes/controle/ControleLivros';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const Livro = new controleLivros();
    if (req.method === 'GET') {
        res.status(200).json(Livro.obterLivros());
    } else if (req.method === 'POST') {
        const livro = req.body;
        Livro.incluir(livro);
        res.status(200).json({ message: 'Livro incluído com sucesso.' });
    } else {
        res.status(405).end('Method Not Allowed');
    }
};

export default handler;
