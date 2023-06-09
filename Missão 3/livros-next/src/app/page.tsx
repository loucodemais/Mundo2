import { Menu } from '../../classes/componentes/Menu'
import '../../styles/globals.css'
import styles from '../../styles/Home.module.css';
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div className="container w-100 h-100">
      <Head>
        <title>Loja Next</title>
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title}>Página Inicial</h1>
      </main>
    </div>
  );
};

export default Home;
