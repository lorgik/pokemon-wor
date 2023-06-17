'use client';

import { useRouter } from 'next/navigation';

import Button from './Button';

import styles from '@/styles/Pagination.module.scss';

const pokemonCount = 1010;

const Pagination = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: number;
}) => {
  const router = useRouter();

  return (
    <nav className={styles.pagination}>
      <Button
        onClick={() =>
          router.push(`/pokedex/${id > 1 ? id - 1 : pokemonCount}`)
        }
      >
        ←
      </Button>
      <span>{children}</span>
      <Button
        onClick={() =>
          router.push(`/pokedex/${id < pokemonCount ? id + 1 : 1}`)
        }
      >
        →
      </Button>
    </nav>
  );
};

export default Pagination;
