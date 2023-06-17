import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link className={styles.link} href="/">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/361/361998.png"
            alt="pokemon logo"
            width="50"
            height="50"
          />
        </Link>
        {/* <Pagination /> */}
        <Link className={styles.link} href="/pokedex">
          <span>Pokedex</span>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/188/188940.png"
            alt="pokedex"
            width="50"
            height="50"
          ></Image>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
