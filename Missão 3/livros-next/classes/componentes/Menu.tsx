import Link from 'next/link';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <ul className="list-inline">
            <li className="list-inline-item">
                <Link href="/" passHref className="nav-link">Home</Link>
            </li>
            <li className="list-inline-item">
                <Link href="/LivroLista" passHref className="nav-link">Catálogo</Link>
            </li>
            <li className="list-inline-item">
                <Link href="/LivroDados" passHref className="nav-link">Novo</Link>
            </li>
        </ul>
    </nav>
  );
};
