import Link from 'next/link';
import styles from './styles.module.scss';
import { capitalize } from '@/global/functions';

const limit = 100;

async function getPokemons() {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`
  );
  return response.json().then((data) => data.results);
}

type Pokemon = {
  name: string;
  url: string;
};

const Pokedex = async () => {
  const pokemons: Pokemon[] = await getPokemons();

  return (
    <main className={styles.main}>
      {pokemons.map((pokemon: Pokemon, index: number) => (
        <Link
          href={`/pokedex/${pokemon.name}`}
          key={index}
          className={styles.card}
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              index + 1
            }.png`})`,
          }}
        >
          <h3>
            #{index + 1} {capitalize(pokemon.name)}
          </h3>
        </Link>
      ))}
    </main>
  );
};

export default Pokedex;
