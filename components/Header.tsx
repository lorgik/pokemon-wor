import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/pokedex">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/361/361998.png"
          alt="pokemon logo"
          width="50"
          height="50"
        />
      </Link>
      <Link className={styles.link} href="/pokedex">
        Pokedex
      </Link>
    </header>
  );
};

export default Header;
