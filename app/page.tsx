import styles from './styles.module.scss';
import Button from '@/components/Button';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Добро пожаловать в{' '}
        <span className={styles.highlight}>Мир Покемонов</span>!
      </h1>

      <Button className={styles.link} href="/pokedex">
        Открыть Покедекс
      </Button>
    </main>
  );
}
