import styles from './styles.module.scss';
import { Metadata } from 'next';
import { ucFirst } from '@/global/functions';

type Props = {
  params: {
    name: string;
  };
};

export async function generateMetadata({
  params: { name },
}: Props): Promise<Metadata> {
  return {
    title: ucFirst(name),
  };
}

async function getData(name: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.json();
}

const PokemonPage = async ({ params: { name } }: Props) => {
  const pokemon = await getData(name);

  return (
    <div className={styles.page}>
      <div
        className={styles.card}
        style={{
          backgroundImage: `url(${pokemon.sprites.other.dream_world.front_default})`,
        }}
      >
        <h3 className={styles.name}>{ucFirst(pokemon.name)}</h3>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>Information</h3>
      </div>
    </div>
  );
};

export default PokemonPage;
